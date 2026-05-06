document.addEventListener('DOMContentLoaded', () => {
    let students = JSON.parse(localStorage.getItem('pieStudents') || '[]');
    let currentCourse = null;
    let searchQuery = '';

    // Views
    const viewHome = document.getElementById('view-home');
    const viewCourse = document.getElementById('view-course');
    const studentGrid = document.getElementById('student-grid');
    
    // Top Bar Controls
    const btnHome = document.getElementById('id-home');
    const currentCourseName = document.getElementById('current-course-name');
    const courseSelectorTop = document.getElementById('course-selector-top');
    const btnAddGlobal = document.getElementById('btn-add-global');
    const searchInput = document.getElementById('search-input');

    // Modal
    const modal = document.getElementById('student-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnCancelModal = document.getElementById('btn-cancel-modal');
    const btnSaveModal = document.getElementById('btn-save-modal');
    
    // Form Elements
    const formId = document.getElementById('form-id');
    const formNombre = document.getElementById('form-nombre');
    const formRut = document.getElementById('form-rut');
    const formFnac = document.getElementById('form-fnac');
    const formCurso = document.getElementById('form-curso');
    const formSituacion = document.getElementById('form-situacion');
    const formNee = document.getElementById('form-nee');
    const formDiag = document.getElementById('form-diag');
    const formAuth = document.getElementById('form-auth');
    const formEdEv = document.getElementById('form-ed-ev');
    const formEdRev = document.getElementById('form-ed-rev');
    const formEdProf = document.getElementById('form-ed-prof');
    const formObs = document.getElementById('form-obs');
    
    // History
    const obsList = document.getElementById('obs-list');
    const drawerObsList = document.getElementById('drawer-obs-list');
    const modalDrawer = document.getElementById('modal-drawer');
    const btnToggleHistory = document.getElementById('btn-toggle-history');
    const btnCloseDrawer = document.getElementById('btn-close-drawer');
    let currentStudentHistory = [];

    // Aula de Recursos
    const subNavBtns = document.querySelectorAll('.sub-nav-btn');
    const subViews = document.querySelectorAll('.subview');
    const aulaLogList = document.getElementById('aula-log-list');
    const aulaFecha = document.getElementById('aula-fecha');
    const aulaPreset = document.getElementById('aula-preset');
    const aulaDetalle = document.getElementById('aula-detalle');
    const aulaStudentSelector = document.getElementById('aula-student-selector');
    const aulaId = document.getElementById('aula-id');
    const aulaBtnText = document.getElementById('aula-btn-text');
    const btnCancelAulaEdit = document.getElementById('btn-cancel-aula-edit');
    const btnSaveAula = document.getElementById('btn-save-aula');
    const courseObsList = document.getElementById('course-obs-list');
    const navLaunchers = document.querySelectorAll('.nav-launcher');
    const courseMiniNav = document.getElementById('course-mini-nav');

    // Quick Obs Bitacora
    const obsStudentSelect = document.getElementById('obs-student-select');
    const obsQuickDate = document.getElementById('obs-quick-date');
    const obsQuickSubject = document.getElementById('obs-quick-subject');
    const obsSubjectOtherContainer = document.getElementById('obs-subject-other-container');
    const obsQuickSubjectOther = document.getElementById('obs-quick-subject-other');
    const obsQuickPreset = document.getElementById('obs-quick-preset');
    const obsQuickReport = document.getElementById('obs-quick-report');
    const btnSaveObsQuick = document.getElementById('btn-save-obs-quick');

    let aulaLog = JSON.parse(localStorage.getItem('aulaLogPIE') || '{}');
    let customAulaActivities = JSON.parse(localStorage.getItem('customAulaActivities') || '[]');

    // --- DRAWER LOGIC ---
    btnToggleHistory.addEventListener('click', () => {
        modalDrawer.classList.toggle('active');
    });

    btnCloseDrawer.addEventListener('click', () => {
        modalDrawer.classList.remove('active');
    });

    // --- PRESET LOGIC ---
    // (Removed obsolete newObsPreset)

    // --- NAVIGATION ---
    document.querySelectorAll('.course-card[data-target]').forEach(card => {
        card.addEventListener('click', (e) => {
            currentCourse = e.currentTarget.getAttribute('data-target');
            showCourseView();
        });
    });

    courseSelectorTop.addEventListener('change', (e) => {
        if (e.target.value) {
            currentCourse = e.target.value;
            showCourseView();
        }
    });

    btnHome.addEventListener('click', showHomeView);

    navLaunchers.forEach(card => {
        card.addEventListener('click', (e) => {
            const targetSubview = e.currentTarget.getAttribute('data-launch');
            showSubview(targetSubview);
        });
    });

    function showSubview(id) {
        subViews.forEach(v => {
            v.classList.remove('active');
            v.classList.add('hidden');
        });
        const target = document.getElementById(id);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
        
        if (id !== 'subview-menu') {
            courseMiniNav.classList.remove('hidden');
            courseMiniNav.classList.add('flex'); // O active si usas block
            document.querySelectorAll('.sub-nav-btn').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-subview') === id);
            });
        } else {
            courseMiniNav.classList.add('hidden');
            courseMiniNav.classList.remove('flex');
        }

        if (id === 'subview-aula') {
            renderAulaLog();
            renderAulaStudentSelector();
        }
        if (id === 'subview-observations') {
            renderObsStudentSelector();
            renderCourseObservations();
            if (obsQuickDate) obsQuickDate.value = new Date().toISOString().split('T')[0];
        }
        if (id === 'subview-students') {
            renderStudentGrid();
        }
    }

    // --- AULA DE RECURSOS LOGIC ---
    function updateAulaPresets() {
        // Keep original presets, add custom ones before the last option
        const originalOptionsCount = 11; // 1 placeholder + 10 presets
        aulaPreset.innerHTML = `
            <option value="">Seleccionar actividad...</option>
            <option value="Reforzamiento de Lectura">Reforzamiento de Lectura</option>
            <option value="Resolución de Problemas Matemáticos">Resolución de Problemas Matemáticos</option>
            <option value="Apoyo en Escritura Creativa">Apoyo en Escritura Creativa</option>
            <option value="Desarrollo de Habilidades Sociales">Desarrollo de Habilidades Sociales</option>
            <option value="Estimulación Cognitiva">Estimulación Cognitiva</option>
            <option value="Apoyo en Evaluación Diferenciada">Apoyo en Evaluación Diferenciada</option>
            <option value="Trabajo en Funciones Ejecutivas">Trabajo en Funciones Ejecutivas</option>
            <option value="Adaptación de Material de Estudio">Adaptación de Material de Estudio</option>
            <option value="Coordinación con Docente de Aula">Coordinación con Docente de Aula</option>
            <option value="Taller de Autonomía y Hábitos">Taller de Autonomía y Hábitos</option>
        `;
        customAulaActivities.forEach(act => {
            const opt = document.createElement('option');
            opt.value = act;
            opt.textContent = act;
            aulaPreset.appendChild(opt);
        });
        const lastOpt = document.createElement('option');
        lastOpt.value = 'custom';
        lastOpt.textContent = '-- + Agregar nueva actividad --';
        aulaPreset.appendChild(lastOpt);
    }

    aulaPreset.addEventListener('change', (e) => {
        if (e.target.value && e.target.value !== 'custom') {
            const currentVal = aulaDetalle.value.trim();
            if (currentVal === '') {
                aulaDetalle.value = e.target.value + ": ";
            } else {
                aulaDetalle.value = currentVal + " | " + e.target.value + ": ";
            }
        }
        aulaDetalle.focus();
    });

    function renderAulaStudentSelector() {
        aulaStudentSelector.innerHTML = '';
        const courseStudents = students.filter(s => s.curso === currentCourse);
        if (courseStudents.length === 0) {
            aulaStudentSelector.innerHTML = '<div style="font-size: 0.8rem; color: var(--text-muted);">No hay estudiantes en este curso.</div>';
            return;
        }

        courseStudents.forEach(student => {
            const label = document.createElement('label');
            label.className = 'aula-student-checkbox';
            label.innerHTML = `
                <input type="checkbox" name="aula-student" value="${student.nombre}">
                ${student.nombre}
            `;
            aulaStudentSelector.appendChild(label);
        });
    }

    btnSaveAula.addEventListener('click', () => {
        let actividad = aulaDetalle.value.trim();
        const presetVal = aulaPreset.value;
        const editId = aulaId.value;

        if (presetVal === 'custom' && actividad && !customAulaActivities.includes(actividad)) {
            customAulaActivities.push(actividad);
            localStorage.setItem('customAulaActivities', JSON.stringify(customAulaActivities));
            updateAulaPresets();
        }

        const selectedStudents = Array.from(document.querySelectorAll('input[name="aula-student"]:checked')).map(cb => cb.value);

        if (!actividad || !aulaFecha.value || selectedStudents.length === 0) {
            alert('Por favor selecciona fecha, describe la actividad y al menos un estudiante.');
            return;
        }

        if (!aulaLog[currentCourse]) aulaLog[currentCourse] = [];

        if (editId) {
            // Update existing
            const idx = aulaLog[currentCourse].findIndex(e => e.id == editId);
            if (idx > -1) {
                aulaLog[currentCourse][idx] = { ...aulaLog[currentCourse][idx], fecha: aulaFecha.value, actividad, estudiantes: selectedStudents };
            }
        } else {
            // Create new
            aulaLog[currentCourse].push({
                id: Date.now(),
                fecha: aulaFecha.value,
                actividad: actividad,
                estudiantes: selectedStudents
            });
        }

        localStorage.setItem('aulaLogPIE', JSON.stringify(aulaLog));
        resetAulaForm();
        renderAulaLog();
    });

    function resetAulaForm() {
        aulaId.value = '';
        aulaPreset.value = '';
        aulaDetalle.value = '';
        aulaBtnText.textContent = 'Guardar en Libro de Clases';
        btnCancelAulaEdit.classList.add('hidden');
        renderAulaStudentSelector();
    }

    btnCancelAulaEdit.addEventListener('click', resetAulaForm);

    window.editAulaEntry = function(id) {
        const entry = (aulaLog[currentCourse] || []).find(e => e.id == id);
        if (!entry) return;

        aulaId.value = entry.id;
        aulaFecha.value = entry.fecha;
        aulaDetalle.value = entry.actividad;
        aulaBtnText.textContent = 'Actualizar Registro';
        btnCancelAulaEdit.classList.remove('hidden');

        // Check students
        renderAulaStudentSelector();
        const checkboxes = document.querySelectorAll('input[name="aula-student"]');
        checkboxes.forEach(cb => {
            if (entry.estudiantes.includes(cb.value)) cb.checked = true;
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.deleteAulaEntry = function(id) {
        if (!confirm('¿Seguro que deseas eliminar este registro?')) return;
        aulaLog[currentCourse] = aulaLog[currentCourse].filter(e => e.id != id);
        localStorage.setItem('aulaLogPIE', JSON.stringify(aulaLog));
        renderAulaLog();
    };

    function renderAulaLog() {
        aulaLogList.innerHTML = '';
        const logs = aulaLog[currentCourse] || [];
        if (logs.length === 0) {
            aulaLogList.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay registros para este curso.</div>';
            return;
        }

        [...logs].reverse().forEach(entry => {
            const div = document.createElement('div');
            div.className = 'aula-log-item';
            
            const studentTags = (entry.estudiantes || []).map(s => `<span class="student-tag">${s}</span>`).join('');

            div.innerHTML = `
                <div class="aula-log-info" style="flex: 1;">
                    <h4>${entry.actividad}</h4>
                    <span><i class="ph ph-calendar"></i> ${entry.fecha.split('-').reverse().join('-')}</span>
                    <div class="aula-log-students">
                        ${studentTags}
                    </div>
                </div>
                <div class="aula-log-actions" style="display: flex; gap: 0.5rem;">
                    <button class="btn-icon-small" onclick="editAulaEntry(${entry.id})" title="Editar"><i class="ph ph-pencil-simple"></i></button>
                    <button class="btn-icon-small delete" onclick="deleteAulaEntry(${entry.id})" title="Eliminar"><i class="ph ph-trash"></i></button>
                </div>
            `;
            aulaLogList.appendChild(div);
        });
    }

    subNavBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-subview');
            showSubview(targetId);
        });
    });

    function renderObsStudentSelector() {
        obsStudentSelect.innerHTML = '<option value="">Seleccionar estudiante...</option>';
        const courseStudents = students.filter(s => s.curso === currentCourse);
        courseStudents.forEach(student => {
            const opt = document.createElement('option');
            opt.value = student.id;
            opt.textContent = student.nombre;
            obsStudentSelect.appendChild(opt);
        });
    }

    obsQuickSubject.addEventListener('change', (e) => {
        if (e.target.value === 'otro') {
            obsSubjectOtherContainer.classList.remove('hidden');
            obsQuickSubjectOther.focus();
        } else {
            obsSubjectOtherContainer.classList.add('hidden');
        }
    });

    obsQuickPreset.addEventListener('change', (e) => {
        if (e.target.value && e.target.value !== 'otro') {
            obsQuickReport.value = e.target.value;
        } else if (e.target.value === 'otro') {
            obsQuickReport.value = '';
            obsQuickReport.focus();
        }
    });

    btnSaveObsQuick.addEventListener('click', () => {
        const studentId = obsStudentSelect.value;
        const date = obsQuickDate.value;
        let subject = obsQuickSubject.value;
        if (subject === 'otro') {
            subject = obsQuickSubjectOther.value.trim() || 'Otro';
        }
        const report = obsQuickReport.value.trim();

        if (!studentId || !date || !report) {
            alert('Por favor completa Estudiante, Fecha y Detalle.');
            return;
        }

        const studentIdx = students.findIndex(s => s.id === studentId);
        if (studentIdx > -1) {
            if (!students[studentIdx].historialObservaciones) students[studentIdx].historialObservaciones = [];
            students[studentIdx].historialObservaciones.push({
                id: Date.now().toString(),
                fecha: date,
                asignatura: subject,
                reporte: report
            });
            localStorage.setItem('pieStudents', JSON.stringify(students));
            
            // Clear form
            obsStudentSelect.value = '';
            obsQuickSubject.value = '';
            obsQuickSubjectOther.value = '';
            obsSubjectOtherContainer.classList.add('hidden');
            obsQuickReport.value = '';
            obsQuickPreset.value = '';
            
            renderCourseObservations();
        }
    });

    function renderCourseObservations() {
        courseObsList.innerHTML = '';
        const courseStudents = students.filter(s => s.curso === currentCourse);
        let allObs = [];

        courseStudents.forEach(student => {
            if (student.historialObservaciones) {
                student.historialObservaciones.forEach(obs => {
                    allObs.push({ ...obs, studentName: student.nombre });
                });
            }
        });

        if (allObs.length === 0) {
            courseObsList.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay registros recientes en la bitácora.</div>';
            return;
        }

        allObs.sort((a,b) => new Date(b.fecha) - new Date(a.fecha));

        allObs.forEach(obs => {
            const el = document.createElement('div');
            el.className = 'observation-item';
            el.innerHTML = `
                <div class="obs-header">
                    <span class="obs-date">${obs.fecha ? obs.fecha.split('-').reverse().join('-') : '-'}</span>
                    <span class="obs-subject" style="background: var(--primary); color: white;">${obs.studentName}</span>
                </div>
                <div class="obs-body"><strong>${obs.asignatura}:</strong> ${obs.reporte}</div>
            `;
            courseObsList.appendChild(el);
        });
    }

    function showCourseView() {
        viewHome.classList.add('hidden');
        viewHome.classList.remove('active');
        
        viewCourse.classList.remove('hidden');
        viewCourse.classList.add('active');
        
        courseSelectorTop.classList.remove('hidden');
        courseSelectorTop.value = currentCourse;
        currentCourseName.textContent = currentCourse;
        btnAddGlobal.classList.remove('hidden');

        updateAulaPresets();
        if (aulaFecha) aulaFecha.value = new Date().toISOString().split('T')[0];

        showSubview('subview-menu');
    }

    function showHomeView() {
        viewCourse.classList.add('hidden');
        viewCourse.classList.remove('active');
        
        viewHome.classList.remove('hidden');
        viewHome.classList.add('active');
        
        courseSelectorTop.classList.add('hidden');
        currentCourseName.textContent = 'Gestion PIE';
        btnAddGlobal.classList.add('hidden');
        currentCourse = null;
    }

    // --- RENDER GRID ---
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderStudentGrid();
    });

    function renderStudentGrid() {
        studentGrid.innerHTML = '';
        
        let filtered = students.filter(s => {
            const matchFilter = currentCourse === 'all' || s.curso === currentCourse;
            const matchSearch = s.nombre.toLowerCase().includes(searchQuery) || 
                                s.rut.toLowerCase().includes(searchQuery);
            return matchFilter && matchSearch;
        });

        if (filtered.length === 0) {
            studentGrid.innerHTML = `<div style="text-align: center; color: var(--text-muted); grid-column: 1/-1; padding: 2rem;">No hay estudiantes.</div>`;
            return;
        }

        filtered.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-card';
            
            // Generate initials for avatar
            const names = student.nombre.split(' ');
            const initials = names.length > 1 ? names[0][0] + names[1][0] : names[0][0];
            
            const badgeClass = student.nee === 'NEEP' ? 'neep' : '';
            
            card.innerHTML = `
                <div class="student-badge ${badgeClass}">${student.nee}</div>
                <div class="student-avatar">${initials.toUpperCase()}</div>
                <div class="student-info">
                    <h4>${student.nombre}</h4>
                    <p>${student.rut}</p>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(student));
            studentGrid.appendChild(card);
        });
    }

    // --- MODAL TABS ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                c.classList.add('hidden');
            });

            e.currentTarget.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
            }
        });
    });

    // --- MODAL ---
    btnAddGlobal.addEventListener('click', () => openModal(null));
    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);

    function openModal(student) {
        if (student) {
            formId.value = student.id;
            formNombre.value = student.nombre;
            formRut.value = student.rut;
            formFnac.value = student.fechaNacimiento;
            formCurso.value = student.curso;
            formSituacion.value = student.situacion;
            formNee.value = student.nee;
            formDiag.value = student.diag;
            formAuth.value = student.autorizacion;
            formEdEv.value = student.evalPsicopedag?.ev || '';
            formEdRev.value = student.evalPsicopedag?.rev || '';
            formEdProf.value = student.evalPsicopedag?.prof || '';
            formObs.value = student.observaciones || '';
            renderObservationsHistory(student.nombre);
        } else {
            document.getElementById('student-form').reset();
            formId.value = '';
            formCurso.value = currentCourse !== 'all' && currentCourse ? currentCourse : '1°A';
            obsList.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem;">Guarda al estudiante para ver su historial.</div>';
        }
        
        // Reset tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => {
            c.classList.remove('active');
            c.classList.add('hidden');
        });
        document.querySelector('.tab-btn[data-tab="tab-basico"]').classList.add('active');
        const tabBasico = document.getElementById('tab-basico');
        if (tabBasico) {
            tabBasico.classList.remove('hidden');
            tabBasico.classList.add('active');
        }

        modal.classList.add('active');
    }

    function renderObservationsHistory(studentName) {
        obsList.innerHTML = '';
        drawerObsList.innerHTML = '';
        
        let integratedHistory = [];

        // 1. Get Bitacora (Observaciones/Incidentes)
        const studentObj = students.find(s => s.nombre === studentName);
        if (studentObj && studentObj.historialObservaciones) {
            studentObj.historialObservaciones.forEach(obs => {
                integratedHistory.push({
                    ...obs,
                    type: 'bitacora'
                });
            });
        }

        // 2. Get Aula de Recursos
        Object.keys(aulaLog).forEach(course => {
            aulaLog[course].forEach(entry => {
                if (entry.estudiantes && entry.estudiantes.includes(studentName)) {
                    integratedHistory.push({
                        id: entry.id,
                        fecha: entry.fecha,
                        asignatura: 'Aula de Recursos',
                        reporte: entry.actividad,
                        type: 'aula'
                    });
                }
            });
        });

        if (integratedHistory.length === 0) {
            const emptyMsg = '<div style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem;">Sin registros.</div>';
            obsList.innerHTML = emptyMsg;
            drawerObsList.innerHTML = emptyMsg;
            return;
        }

        // Sort by date descending
        integratedHistory.sort((a,b) => new Date(b.fecha) - new Date(a.fecha));

        integratedHistory.forEach(obs => {
            const badgeColor = obs.type === 'aula' ? 'var(--secondary)' : 'var(--primary)';
            const html = `
                <div class="obs-header">
                    <span class="obs-date">${obs.fecha ? obs.fecha.split('-').reverse().join('-') : '-'}</span>
                    <span class="obs-subject" style="background: ${badgeColor}; color: white;">${obs.asignatura}</span>
                </div>
                <div class="obs-body">${obs.reporte}</div>
            `;
            
            const el1 = document.createElement('div');
            el1.className = 'observation-item';
            el1.innerHTML = html;
            obsList.appendChild(el1);
            
            const el2 = document.createElement('div');
            el2.className = 'observation-item';
            el2.innerHTML = html;
            drawerObsList.appendChild(el2);
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        modalDrawer.classList.remove('active');
    }

    btnSaveModal.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!formNombre.value || !formRut.value) {
            alert('Nombre y RUT son obligatorios.');
            return;
        }

        const isNew = formId.value === '';
        const id = isNew ? `new-${Date.now()}` : formId.value;

        const updatedStudent = {
            id,
            curso: formCurso.value,
            nombre: formNombre.value,
            rut: formRut.value,
            fechaNacimiento: formFnac.value,
            nee: formNee.value,
            diag: formDiag.value,
            situacion: formSituacion.value,
            autorizacion: formAuth.value,
            evalPsicopedag: {
                ev: formEdEv.value,
                rev: formEdRev.value,
                prof: formEdProf.value,
                reg: isNew ? '' : (students.find(s=>s.id===id)?.evalPsicopedag?.reg || ''),
                rut: isNew ? '' : (students.find(s=>s.id===id)?.evalPsicopedag?.rut || '')
            },
            medica: isNew ? {} : students.find(s=>s.id===id).medica,
            psicologo: isNew ? {} : students.find(s=>s.id===id).psicologo,
            fonoaudiologo: isNew ? {} : students.find(s=>s.id===id).fonoaudiologo,
            terapeuta: isNew ? {} : students.find(s=>s.id===id).terapeuta,
            observaciones: formObs.value,
            historialObservaciones: isNew ? [] : (students.find(s => s.id === id)?.historialObservaciones || [])
        };

        if (isNew) {
            students.push(updatedStudent);
        } else {
            const idx = students.findIndex(s => s.id === id);
            if (idx > -1) students[idx] = updatedStudent;
        }

        localStorage.setItem('pieStudents', JSON.stringify(students));
        renderStudentGrid();
        closeModal();
    });

    // Se eliminó la función duplicada y obsoleta renderObservationsHistory
});
