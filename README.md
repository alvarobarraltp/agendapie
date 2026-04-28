# 📋 Registro PIE 2026
### Programa de Integración Escolar — Liceo Técnico Profesional

App web móvil para el registro y seguimiento de estudiantes del Programa de Integración Escolar (PIE), diseñada para funcionar directamente desde el navegador del celular sin necesidad de instalación.

---

## 🚀 Cómo usar

### Opción 1 — GitHub Pages (recomendado)
1. Sube este repositorio a GitHub
2. Ve a **Settings → Pages**
3. En *Source*, selecciona **main** y carpeta **/ (root)**
4. Haz clic en **Save**
5. Tu app estará en: `https://TU_USUARIO.github.io/pie2026/`

### Opción 2 — Local
Abre `index.html` directamente en cualquier navegador moderno. No requiere servidor.

---

## 🔐 Credenciales de acceso

| Campo | Valor |
|-------|-------|
| RUT   | `12.988.965-9` |
| Clave | `77633333` |

---

## 📱 Funcionalidades

- **Pantalla de inicio** — cursos y accesos rápidos
- **Búsqueda** — por nombre, RUT o diagnóstico
- **Vista por curso** — 1°A y 1°B
- **Alertas** — evaluaciones vencidas o por vencer (próximos 90 días)
- **Ficha completa** — datos personales, dirección, apoderado y equipo de profesionales (ed. diferencial, médico, psicólogo, fonoaudiólogo)
- **Agregar estudiante** — formulario completo
- **Semáforo de estado** — verde (vigente), amarillo (por vencer), rojo (vencido)
- **Cierre de sesión**

---

## 📁 Estructura del proyecto

```
pie2026/
│
├── index.html          ← App principal (todas las pantallas)
├── README.md           ← Este archivo
│
├── css/
│   └── styles.css      ← Estilos móvil-first
│
└── js/
    ├── data.js         ← Datos de estudiantes y usuarios
    ├── utils.js        ← Funciones utilitarias (fechas, RUT, etc.)
    └── app.js          ← Lógica principal de la app
```

---

## ✏️ Cómo agregar más estudiantes permanentemente

Edita el archivo `js/data.js` y agrega un nuevo objeto al arreglo `ESTUDIANTES` siguiendo la misma estructura.

---

## 🛡️ Seguridad

> ⚠️ Esta app almacena datos en el navegador (sin servidor). Para uso institucional con datos sensibles, se recomienda migrar a una solución con base de datos y autenticación segura en servidor.

---

## 🧑‍💻 Tecnologías

- HTML5, CSS3, JavaScript vanilla
- Sin dependencias externas
- Compatible con iOS Safari, Android Chrome y navegadores de escritorio

---

*Desarrollado para uso educativo — Educación Diferencial PIE 2026*
