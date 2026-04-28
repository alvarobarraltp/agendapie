const TODAY = new Date("2026-04-28");

function pDate(s) {
  if (!s || ["no aplica", "no plica", ""].includes(String(s).trim().toLowerCase())) return null;
  s = String(s).trim();
  const p = s.split(/[-\/]/);
  if (p.length !== 3) return null;
  let d, m, y;
  if (p[0].length === 4) { y = +p[0]; m = +p[1]; d = +p[2]; }
  else if (+p[2] > 31) { d = +p[0]; m = +p[1]; y = +p[2]; }
  else { m = +p[0]; d = +p[1]; y = +p[2]; }
  if (y < 100) y += 2000;
  return new Date(y, m - 1, d);
}

function fmt(s) {
  const d = pDate(s);
  if (!d) return "—";
  return d.toLocaleDateString("es-CL", { day: "2-digit", month: "2-digit", year: "2-digit" });
}

function evalStatus(s) {
  const d = pDate(s);
  if (!d) return "na";
  const diff = Math.round((d - TODAY) / 86400000);
  if (diff < 0) return "bad";
  if (diff <= 90) return "warn";
  return "ok";
}

function worstStatus(e) {
  const ss = [e.rp, e.rm, e.rpsi, e.rf].map(evalStatus);
  if (ss.includes("bad")) return "vencido";
  if (ss.includes("warn")) return "por_vencer";
  return "vigente";
}

function initials(n) {
  const w = n.trim().split(" ");
  return (w[0][0] + (w[1] ? w[1][0] : "")).toUpperCase();
}

const AVB = [
  "#EEEDFE:#3C3489", "#E1F5EE:#085041", "#E6F1FB:#0C447C",
  "#FAECE7:#712B13", "#FBEAF0:#72243E"
];
function avStyle(id) {
  const s = AVB[id % AVB.length].split(":");
  return `background:${s[0]};color:${s[1]}`;
}

function formatRut(rut) {
  rut = rut.replace(/[^0-9kK]/g, "");
  if (rut.length < 2) return rut;
  const dv = rut.slice(-1);
  const num = rut.slice(0, -1);
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + dv;
}

function validateRut(rut) {
  rut = rut.replace(/[^0-9kK]/g, "").toLowerCase();
  if (rut.length < 8) return false;
  const dv = rut.slice(-1);
  const num = rut.slice(0, -1);
  let sum = 0, mul = 2;
  for (let i = num.length - 1; i >= 0; i--) {
    sum += parseInt(num[i]) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const expected = 11 - (sum % 11);
  const dvExpected = expected === 11 ? "0" : expected === 10 ? "k" : String(expected);
  return dv === dvExpected;
}
