const initialStudents = [
    // 1°A
    {
        id: "1a-1", curso: "1°A", nombre: "Miguel Angel Pérez Lagos", rut: "23483893-8",
        fechaNacimiento: "22-10-2010", nee: "NEEP", diag: "DIL", autorizacion: "05-03-2024", situacion: "VIGENTE",
        evalPsicopedag: { ev: "23-03-2026", rev: "23-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "21-04-26", rev: "21-04-28", prof: "Haiskell Deffit Alemán", rut: "26134742-3", reg: "522893" },
        psicologo: { ev: "01-12-25", rev: "01-12-28", prof: "Nataly Álvarez", rut: "20032394-7", reg: "354585" },
        fonoaudiologo: { ev: "24/03/2026", rev: "24/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1a-2", curso: "1°A", nombre: "Catalina Anais Vergara Cárcamo", rut: "23420823-3",
        fechaNacimiento: "04-09-2010", nee: "NEEP", diag: "DIL", autorizacion: "10-03-2025", situacion: "VIGENTE",
        evalPsicopedag: { ev: "11-11-2025", rev: "11-11-27", prof: "Hellen Saldaña Carrillanca", rut: "", reg: "68062" },
        medica: { ev: "21-04-26", rev: "21-04-28", prof: "Haiskell Deffit Alemán", rut: "26134742-3", reg: "522893" },
        psicologo: { ev: "17-03-25", rev: "17-03-28", prof: "Cinthia Arriagada Hernandez", rut: "19086903-2", reg: "323602" },
        fonoaudiologo: { ev: "16/03/2026", rev: "16/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1a-3", curso: "1°A", nombre: "Leonel Hernán Pradines Flández", rut: "23959701-7",
        fechaNacimiento: "25-05-2012", nee: "NEEP", diag: "DIL", autorizacion: "22-03-2024", situacion: "VIGENTE (EXCEPCIONALIDAD)",
        evalPsicopedag: { ev: "16-03-2026", rev: "16-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Sofía Vargas Fuentes", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "01-12-25", rev: "01-12-28", prof: "Nataly Álvarez", rut: "20032394-7", reg: "354585" },
        fonoaudiologo: { ev: "19/03/2026", rev: "19/03/2026", prof: "Viviana Bahamonde", rut: "17-606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1a-4", curso: "1°A", nombre: "Daniela Trinidad Solís Barriga", rut: "23882381-1",
        fechaNacimiento: "13-02-2012", nee: "NEET", diag: "DEA", autorizacion: "09-03-2026", situacion: "VIGENTE",
        evalPsicopedag: { ev: "25-03-2026", rev: "25-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "30-04-26", rev: "30-04-28", prof: "Haiskell Deffit Alemán", rut: "26134742-3", reg: "522893" },
        psicologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        fonoaudiologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        terapeuta: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" }, observaciones: ""
    },
    {
        id: "1a-5", curso: "1°A", nombre: "Carla María Fernández Navarrete", rut: "23751918-3",
        fechaNacimiento: "22-09-2011", nee: "NEET", diag: "DEA", autorizacion: "13-03-2026", situacion: "VIGENTE",
        evalPsicopedag: { ev: "26-03-2026", rev: "26-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "13-04-26", rev: "13-04-28", prof: "Milena Monje", rut: "174603332", reg: "454610" },
        psicologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        fonoaudiologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        terapeuta: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" }, observaciones: ""
    },
    {
        id: "1a-6", curso: "1°A", nombre: "Javiera de Jesús Guzmán Lignay", rut: "23757744-2",
        fechaNacimiento: "25-09-2011", nee: "NEET", diag: "DEA", autorizacion: "09-03-2026", situacion: "VIGENTE",
        evalPsicopedag: { ev: "21-04-2026", rev: "21-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Milena Monje", rut: "174603332", reg: "454610" },
        psicologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        fonoaudiologo: { ev: "11/03/2026", rev: "11/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" }, observaciones: ""
    },
    {
        id: "1a-7", curso: "1°A", nombre: "Antonia Fernanda del C. Barrientos Sáez", rut: "23511157-8",
        fechaNacimiento: "01-12-2010", nee: "NEET", diag: "FIL", autorizacion: "07-03-2025", situacion: "VIGENTE",
        evalPsicopedag: { ev: "12-11-2025", rev: "12-11-27", prof: "Teresa Schwencke", rut: "", reg: "174877" },
        medica: { ev: "13-04-26", rev: "13-04-28", prof: "Milena Monje", rut: "174603332", reg: "454610" },
        psicologo: { ev: "29-03-25", rev: "29-03-27", prof: "Carlos Catalán", rut: "176934727", reg: "138415" },
        fonoaudiologo: { ev: "24/03/2025", rev: "24/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1a-8", curso: "1°A", nombre: "Eimy Francisca Llenel Segura", rut: "23973398-0",
        fechaNacimiento: "24-05-2012", nee: "NEET", diag: "DEA", autorizacion: "04-03-2026", situacion: "VIGENTE",
        evalPsicopedag: { ev: "17-04-2026", rev: "17-04-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Milena Monje", rut: "174603332", reg: "454610" },
        psicologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        fonoaudiologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        terapeuta: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" }, observaciones: ""
    },

    // 1°B
    {
        id: "1b-1", curso: "1°B", nombre: "Sebastián Alberto Carrasco Ramírez", rut: "23646201-3",
        fechaNacimiento: "13-05-11", nee: "NEEP", diag: "TEA", autorizacion: "20-03-26", situacion: "VIGENTE",
        evalPsicopedag: { ev: "24-3-26", rev: "24-3-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-29", prof: "Sofía Vargas", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "02-04-26", rev: "02-04-28", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "06/04/2026", rev: "06/04/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "30/4/2026", rev: "30/4/2027", prof: "Josefa Fariña", rut: "20.266.195-5", reg: "815135" }, observaciones: ""
    },
    {
        id: "1b-2", curso: "1°B", nombre: "Sofía Millaray Prieto Arismendi", rut: "23883973-4",
        fechaNacimiento: "17-02-12", nee: "NEEP", diag: "TEA", autorizacion: "05-03-26", situacion: "VIGENTE",
        evalPsicopedag: { ev: "23-03-06", rev: "23-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-29", prof: "Sofía Vargas", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "21-04-26", rev: "21-04-28", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "24/03/2026", rev: "24/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "7/4/2026", rev: "7/4/2027", prof: "Josefa Fariña", rut: "20.266.195-5", reg: "815135" }, observaciones: ""
    },
    {
        id: "1b-3", curso: "1°B", nombre: "Erick Ignacio Quinchagual Urriaga", rut: "23924210-3",
        fechaNacimiento: "13-04-12", nee: "NEEP", diag: "TEA", autorizacion: "09-03-26", situacion: "VIGENTE (EXCEPCIONALIDAD)",
        evalPsicopedag: { ev: "20-04-26", rev: "20-04-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-30", prof: "Sofía Vargas", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "31-03-26", rev: "31-03-28", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "25/03/2026", rev: "25/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "9/4/2026", rev: "9/4/2027", prof: "Josefa Fariña", rut: "20.266.195-5", reg: "815135" }, observaciones: ""
    },
    {
        id: "1b-4", curso: "1°B", nombre: "Cristhian Bernardo Gallardo Paillán", rut: "23901400-3",
        fechaNacimiento: "17-03-12", nee: "NEET", diag: "TDA", autorizacion: "04-03-26", situacion: "VIGENTE",
        evalPsicopedag: { ev: "13-03-26", rev: "13-03-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Sofía Vargas", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "12/03/26", rev: "12-03-28", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "30/03/2026", rev: "30/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "14/4/2026", rev: "14/4/2027", prof: "Josefa Fariña", rut: "20.266.195-5", reg: "815135" }, observaciones: ""
    },
    {
        id: "1b-5", curso: "1°B", nombre: "Edison Fabián Delgado Ojeda", rut: "23787069-7",
        fechaNacimiento: "30-10-11", nee: "NEET", diag: "TDA-H", autorizacion: "06-03-26", situacion: "VIGENTE",
        evalPsicopedag: { ev: "27-04-26", rev: "27-04-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Sofía Vargas", rut: "16209745-8", reg: "273619" },
        psicologo: { ev: "13-04-2026", rev: "13-04-2028", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "06/04/2026", rev: "06/04/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "15/4/2026", rev: "15/4/2027", prof: "Josefa Fariña", rut: "20.266.195-5", reg: "815135" }, observaciones: ""
    },
    {
        id: "1b-6", curso: "1°B", nombre: "Pamela Antonella Iñil Barriga", rut: "23711112-5",
        fechaNacimiento: "21-07-11", nee: "NEET", diag: "FIL", autorizacion: "10-03-25", situacion: "VIGENTE",
        evalPsicopedag: { ev: "14-11-25", rev: "14-11-27", prof: "Karla Imilpán Barría", rut: "", reg: "302211" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Milena Monje", rut: "17460333-2", reg: "454610" },
        psicologo: { ev: "06-05-25", rev: "06-05-27", prof: "Carina Calfueque", rut: "18733608-2", reg: "263866" },
        fonoaudiologo: { ev: "23/03/2026", rev: "23/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1b-7", curso: "1°B", nombre: "Jordán Alexis Márquez Gallardo", rut: "23431910-8",
        fechaNacimiento: "13-09-10", nee: "NEET", diag: "FIL", autorizacion: "06-03-26", situacion: "VIGENTE",
        evalPsicopedag: { ev: "12-4-26", rev: "12-4-28", prof: "José Barra Saez", rut: "", reg: "84235" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Milena Monje", rut: "17460333-2", reg: "454610" },
        psicologo: { ev: "13-03-2026", rev: "13-03-2028", prof: "Edgardo Rettig", rut: "16964043-2", reg: "188509" },
        fonoaudiologo: { ev: "26/03/2026", rev: "26/03/2027", prof: "Viviana Bahamonde", rut: "17.606.685-7", reg: "179137" },
        terapeuta: { ev: "", rev: "", prof: "", rut: "", reg: "" }, observaciones: ""
    },
    {
        id: "1b-8", curso: "1°B", nombre: "Daniela Edith Quilempan Martínez", rut: "23804504-5",
        fechaNacimiento: "23-11-11", nee: "NEET", diag: "FIL", autorizacion: "07-04-25", situacion: "VIGENTE",
        evalPsicopedag: { ev: "25-11-25", rev: "25-11-27", prof: "Lorena Ortega Candia", rut: "", reg: "16806" },
        medica: { ev: "17-04-26", rev: "17-04-28", prof: "Milena Monje", rut: "17460333-2", reg: "454610" },
        psicologo: { ev: "08-05-25", rev: "08-05-27", prof: "Lucia Ramirez Gaete", rut: "15512913-1", reg: "256282" },
        fonoaudiologo: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" },
        terapeuta: { ev: "no aplica", rev: "no aplica", prof: "no aplica", rut: "no aplica", reg: "no aplica" }, observaciones: ""
    }
];

// In a real app we'd load this from localstorage or an API. 
// For now, we seed localstorage if it's empty.
if (!localStorage.getItem('pieStudents')) {
    localStorage.setItem('pieStudents', JSON.stringify(initialStudents));
}
