/* ────────────────────────────────────────────
   PIE 2026 — App principal
   ──────────────────────────────────────────── */

let usuarioActivo = null;
let prevScreen = "home";
let listData = [];
let listTitle = "";
let listFilter = { diag: "" };

/* ══════════════════════════════
   NAVEGACIÓN
══════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("screen-" + id);
  if (el) el.classList.add("active");
  window.scrollTo(0, 0);
}

function goHome() {
  prevScreen = "home";
  document.getElementById("home-search-input").value = "";
  document.getElementById("home-search-results").innerHTML = "";
  document.getElementById("home-main-content").style.display = "";
  showScreen("home");
}

function goBack() {
  if (prevScreen === "home") goHome();
  else showScreen("list");
}

function goView(type, param) {
  prevScreen = "list";
  document.getElementById("list-q").value = "";
  listFilter = { diag: "" };

  if (type === "curso") {
    listData = ESTUDIANTES.filter(e => e.cur === param);
    listTitle = param;
    document.getElementById("list-title").textContent = param;
    document.getElementById("list-sub").textContent = `${listData.length} estudiantes`;
  } else if (type === "alertas") {
    listData = ESTUDIANTES.filter(e => worstStatus(e) !== "vigente");
    listTitle = "Alertas";
    document.getElementById("list-title").textContent = "Alertas";
    document.getElementById("list-sub").textContent = `${listData.length} con evaluaciones pendientes`;
  } else if (type === "neep") {
    listData = ESTUDIANTES.filter(e => e.nee === "NEEP");
    listTitle = "Estudiantes NEEP";
    document.getElementById("list-title").textContent = "NEEP";
    document.getElementById("list-sub").textContent = "Necesidad educativa permanente";
  } else if (type === "neet") {
    listData = ESTUDIANTES.filter(e => e.nee === "NEET");
    listTitle = "Estudiantes NEET";
    document.getElementById("list-title").textContent = "NEET";
    document.getElementById("list-sub").textContent = "Necesidad educativa transitoria";
  } else {
    listData = [...ESTUDIANTES];
    listTitle = "Todos los estudiantes";
    document.getElementById("list-title").textContent = "Todos";
    document.getElementById("list-sub").textContent = `${ESTUDIANTES.length} estudiantes`;
  }

  buildListChips();
  renderListStats();
  renderList();
  showScreen("list");
}

/* ══════════════════════════════
   LOGIN
══════════════════════════════ */
function doLogin() {
  const rut = document.getElementById("login-rut").value.trim().replace(/[^0-9kK\-]/g, "");
  const clave = document.getElementById("login-clave").value.trim();
  const err = document.getElementById("login-error");

  const user = USUARIOS.find(u => {
    const rutNorm = u.rut.replace(/\./g, "").toLowerCase();
    const inputNorm = rut.replace(/\./g, "").toLowerCase();
    return rutNorm === inputNorm && u.clave === clave;
  });

  if (!user) {
    err.textContent = "RUT o clave incorrectos. Intente nuevamente.";
    err.classList.add("show");
    document.getElementById("login-clave").value = "";
    return;
  }

  err.classList.remove("show");
  usuarioActivo = user;
  document.getElementById("user-name").textContent = user.nombre;
  initHome();
  showScreen("home");
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && document.getElementById("screen-login").classList.contains("active")) {
    doLogin();
  }
});

function doLogout() {
  usuarioActivo = null;
  document.getElementById("login-rut").value = "";
  document.getElementById("login-clave").value = "";
  document.getElementById("login-error").classList.remove("show");
  showScreen("login");
}

/* ══════════════════════════════
   HOME
══════════════════════════════ */
function initHome() {
  const alertas = ESTUDIANTES.filter(e => worstStatus(e) !== "vigente").length;
  document.getElementById("alert-count-home").textContent = `${alertas} con pendientes`;

  const CURSOS = [...new Set(ESTUDIANTES.map(e => e.cur))];
  const grid = document.getElementById("curso-grid");
  grid.innerHTML = CURSOS.map(c => {
    const count = ESTUDIANTES.filter(e => e.cur === c).length;
    const venc = ESTUDIANTES.filter(e => e.cur === c && worstStatus(e) === "vencido").length;
    const pv = ESTUDIANTES.filter(e => e.cur === c && worstStatus(e) === "por_vencer").length;
    const alertColor = venc > 0 ? "color:var(--c-red-dark)" : pv > 0 ? "color:var(--c-amber-dark)" : "color:var(--c-green-dark)";
    const alertTxt = venc > 0 ? `${venc} vencida${venc !== 1 ? "s" : ""}` : pv > 0 ? `${pv} por vencer` : "Todo vigente";
    return `<div class="curso-card" onclick="goView('curso','${c}')">
      <div class="curso-icon" style="background:var(--c-blue-bg)">
        <svg viewBox="0 0 30 30" fill="none">
          <rect x="3" y="4" width="24" height="18" rx="3.5" fill="#B5D4F4"/>
          <rect x="7" y="9" width="6" height="6" rx="3" fill="#185FA5"/>
          <rect x="16" y="9" width="8" height="2" rx="1" fill="#185FA5"/>
          <rect x="16" y="12" width="5" height="2" rx="1" fill="#85B7EB"/>
          <rect x="7" y="17" width="16" height="2" rx="1" fill="#85B7EB"/>
          <rect x="11" y="24" width="8" height="2.5" rx="1.25" fill="#185FA5"/>
        </svg>
      </div>
      <div class="curso-name">${c}</div>
      <div class="curso-count">${count} estudiantes</div>
      <div class="curso-alert" style="${alertColor}">${alertTxt}</div>
    </div>`;
  }).join("");
}

function homeSearch(val) {
  const results = document.getElementById("home-search-results");
  const main = document.getElementById("home-main-content");
  if (!val.trim()) {
    results.innerHTML = "";
    main.style.display = "";
    return;
  }
  main.style.display = "none";
  const q = val.toLowerCase();
  const found = ESTUDIANTES.filter(e =>
    e.nom.toLowerCase().includes(q) ||
    e.rut.replace(/[.\-]/g, "").includes(q.replace(/[.\-]/g, "")) ||
    e.diag.toLowerCase().includes(q)
  );
  if (found.length === 0) {
    results.innerHTML = `<div class="no-results">Sin resultados para "<strong>${val}</strong>"</div>`;
    return;
  }
  results.innerHTML = `<div class="search-results-lbl">${found.length} resultado${found.length !== 1 ? "s" : ""}</div>` +
    found.map(e => studentCardHTML(e, `goDetailFromHome(${e.id})`)).join("");
}

function goDetailFromHome(id) {
  prevScreen = "home";
  goDetail(id);
}

/* ══════════════════════════════
   LISTA
══════════════════════════════ */
function buildListChips() {
  const diags = [...new Set(listData.map(e => e.diag))];
  const fc = document.getElementById("list-chips");
  fc.innerHTML = [{ v: "", l: "Todos" }, ...diags.map(d => ({ v: d, l: d }))].map(o =>
    `<button class="chip${listFilter.diag === o.v ? " active" : ""}" onclick="setDiag('${o.v}')">${o.l}</button>`
  ).join("");
}

function setDiag(val) {
  listFilter.diag = val;
  buildListChips();
  renderList();
}

function renderListStats() {
  const venc = listData.filter(e => worstStatus(e) === "vencido").length;
  const ok = listData.filter(e => worstStatus(e) === "vigente").length;
  document.getElementById("list-stats").innerHTML = `
    <div class="stat-mini" style="background:var(--c-green-bg)">
      <div class="stat-mini-num" style="color:var(--c-green-dark)">${ok}</div>
      <div class="stat-mini-lbl" style="color:var(--c-green-dark)">Vigentes</div>
    </div>
    <div class="stat-mini" style="background:var(--c-red-bg)">
      <div class="stat-mini-num" style="color:var(--c-red-dark)">${venc}</div>
      <div class="stat-mini-lbl" style="color:var(--c-red-dark)">${venc === 1 ? "Vencida" : "Vencidas"}</div>
    </div>`;
}

function renderList() {
  const q = document.getElementById("list-q").value.toLowerCase();
  const filtered = listData.filter(e => {
    if (listFilter.diag && e.diag !== listFilter.diag) return false;
    if (q && !e.nom.toLowerCase().includes(q) && !e.rut.includes(q)) return false;
    return true;
  });
  const body = document.getElementById("list-body");
  if (filtered.length === 0) {
    body.innerHTML = `<div class="no-results"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="18" r="10" stroke="#ccc" stroke-width="2"/><path d="M28 28l6 6" stroke="#ccc" stroke-width="2" stroke-linecap="round"/></svg>Sin resultados</div>`;
    return;
  }
  body.innerHTML = filtered.map(e => studentCardHTML(e, `goDetail(${e.id})`)).join("");
}

/* ══════════════════════════════
   TARJETA ESTUDIANTE
══════════════════════════════ */
function evalChipHTML(label, dateStr) {
  const s = evalStatus(dateStr);
  const cls = { ok: "ev-ok", warn: "ev-warn", bad: "ev-bad", na: "ev-na" }[s];
  const val = s === "na" ? "N/A" : fmt(dateStr);
  return `<div class="eval-chip ${cls}"><div class="eval-chip-lbl">${label}</div><div class="eval-chip-val">${val}</div></div>`;
}

function studentCardHTML(e, clickFn) {
  const ws = worstStatus(e);
  return `<div class="student-card ${ws}" onclick="${clickFn}">
    <div class="sc-top">
      <div class="avatar" style="${avStyle(e.id)}">${initials(e.nom)}</div>
      <div style="flex:1;min-width:0">
        <div class="sc-name">${e.nom}</div>
        <div class="sc-meta">${e.cur} · ${e.rut}</div>
      </div>
      <svg class="sc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="sc-pills">
      <span class="pill pill-${e.nee.toLowerCase()}">${e.nee}</span>
      <span class="pill pill-diag">${e.diag}</span>
    </div>
    <div class="sc-evals">
      ${evalChipHTML("Psicopedag.", e.rp)}
      ${evalChipHTML("Médica", e.rm)}
      ${evalChipHTML("Psicólogo/a", e.rpsi)}
      ${evalChipHTML("Fonoaud.", e.rf)}
    </div>
  </div>`;
}

/* ══════════════════════════════
   DETALLE ESTUDIANTE
══════════════════════════════ */
function goDetail(id) {
  const e = ESTUDIANTES.find(x => x.id === id);
  if (!e) return;
  if (prevScreen !== "home") prevScreen = "list";

  document.getElementById("detail-title").textContent = e.nom.split(" ").slice(0, 2).join(" ");
  document.getElementById("detail-sub").textContent = `${e.cur} · ${e.nee} · ${e.diag}`;

  const ws = worstStatus(e);
  const bannerCfg = {
    vigente: { bg: "var(--c-green-bg)", dot: "var(--c-green-mid)", txt: "var(--c-green-dark)", lbl: "Todas las evaluaciones vigentes" },
    por_vencer: { bg: "var(--c-amber-bg)", dot: "#EF9F27", txt: "var(--c-amber-dark)", lbl: "Hay evaluaciones por vencer" },
    vencido: { bg: "var(--c-red-bg)", dot: "var(--c-red-mid)", txt: "var(--c-red-dark)", lbl: "Hay evaluaciones vencidas" }
  }[ws];

  function profCard(label, prof, rut, nreg, ev, reev) {
    const s = evalStatus(reev);
    const col = { ok: "var(--c-green-mid)", warn: "#EF9F27", bad: "var(--c-red-mid)", na: "#ccc" }[s];
    const lbl = { ok: "Vigente", warn: "Por vencer", bad: "Vencida", na: "N/A" }[s];
    const badgeBg = { ok: "var(--c-green-bg)", warn: "var(--c-amber-bg)", bad: "var(--c-red-bg)", na: "#f1f0ec" }[s];
    const badgeTxt = { ok: "var(--c-green-dark)", warn: "var(--c-amber-dark)", bad: "var(--c-red-dark)", na: "#999" }[s];
    if (!prof || prof === "no aplica" || prof === "")
      return `<div class="prof-card" style="border-left-color:#e0e0d8">
        <div class="prof-label">${label}</div>
        <div style="font-size:12px;color:#aaa">No aplica para este estudiante</div>
      </div>`;
    return `<div class="prof-card" style="border-left-color:${col}">
      <div class="prof-label">${label}
        <span class="prof-badge" style="background:${badgeBg};color:${badgeTxt}">${lbl}</span>
      </div>
      <div class="prof-name">${prof}</div>
      <div class="prof-row"><span class="prof-lbl">RUT</span><span class="prof-val">${rut || "—"}</span></div>
      <div class="prof-row"><span class="prof-lbl">N° Registro</span><span class="prof-val">${nreg || "—"}</span></div>
      <div class="prof-row"><span class="prof-lbl">Evaluación</span><span class="prof-val">${fmt(ev)}</span></div>
      <div class="prof-row"><span class="prof-lbl">Revaluación</span><span class="prof-val" style="color:${col}">${fmt(reev)}</span></div>
    </div>`;
  }

  document.getElementById("detail-body").innerHTML = `
    <div class="status-banner" style="background:${bannerCfg.bg}">
      <div class="status-dot" style="background:${bannerCfg.dot}"></div>
      <span class="status-txt" style="color:${bannerCfg.txt}">${bannerCfg.lbl}</span>
    </div>
    <div class="info-block">
      <div class="info-block-title">Datos del estudiante</div>
      <div class="info-row"><span class="info-lbl">RUT</span><span class="info-val">${e.rut}</span></div>
      <div class="info-row"><span class="info-lbl">Fecha nac.</span><span class="info-val">${fmt(e.fnac)}</span></div>
      <div class="info-row"><span class="info-lbl">Curso</span><span class="info-val">${e.cur}</span></div>
      <div class="info-row"><span class="info-lbl">NEE</span><span class="info-val">${e.nee}</span></div>
      <div class="info-row"><span class="info-lbl">Diagnóstico</span><span class="info-val">${e.diag}</span></div>
    </div>
    <div class="info-block">
      <div class="info-block-title">Contacto y domicilio</div>
      <div class="info-row"><span class="info-lbl">Dirección</span><span class="info-val">${e.direccion || "—"}</span></div>
      <div class="info-row"><span class="info-lbl">Teléfono</span><span class="info-val">${e.telefono || "—"}</span></div>
      <div class="info-row"><span class="info-lbl">Apoderado/a</span><span class="info-val">${e.apoderado || "—"}</span></div>
    </div>
    <div class="info-block-title" style="padding:0 0 8px">Equipos profesionales</div>
    ${profCard("Educador/a diferencial", e.pp, "Reg. " + e.nrp, e.nrp, e.ep, e.rp)}
    ${profCard("Médico / Neurólogo / Psiquiatra", e.pm, e.rm_rut, e.nrm, e.vm, e.rm)}
    ${profCard("Psicólogo/a", e.ppsi, e.psi_rut, e.nrpsi, e.epsi, e.rpsi)}
    ${profCard("Fonoaudiología", e.pf, e.f_rut, e.nrf, e.ef, e.rf)}
  `;
  showScreen("detail");
}

/* ══════════════════════════════
   AGREGAR ESTUDIANTE
══════════════════════════════ */
function goAgregar() {
  prevScreen = "list";
  document.getElementById("form-success").classList.remove("show");
  document.getElementById("add-form").reset();
  showScreen("agregar");
}

function submitEstudiante() {
  const get = id => document.getElementById(id).value.trim();
  const nom = get("f-nom");
  const rut = get("f-rut");
  const cur = get("f-cur");
  const nee = get("f-nee");
  const diag = get("f-diag");

  if (!nom || !rut || !cur || !nee || !diag) {
    alert("Por favor completa los campos obligatorios: nombre, RUT, curso, NEE y diagnóstico.");
    return;
  }

  const nuevo = {
    id: ESTUDIANTES.length + 1,
    cur, nom, rut,
    fnac: get("f-fnac"),
    nee, diag,
    direccion: get("f-dir"),
    telefono: get("f-tel"),
    apoderado: get("f-apoderado"),
    ep: get("f-ep"), rp: get("f-rp"), pp: get("f-pp"), nrp: get("f-nrp"),
    vm: get("f-vm"), rm: get("f-rm"), pm: get("f-pm"), rm_rut: "", nrm: get("f-nrm"),
    epsi: get("f-epsi"), rpsi: get("f-rpsi"), ppsi: get("f-ppsi"), psi_rut: "", nrpsi: get("f-nrpsi"),
    ef: get("f-ef"), rf: get("f-rf"), pf: get("f-pf"), f_rut: "", nrf: get("f-nrf")
  };

  ESTUDIANTES.push(nuevo);
  document.getElementById("form-success").classList.add("show");
  document.getElementById("add-form").reset();
  window.scrollTo(0, 0);
  setTimeout(() => initHome(), 300);
}
