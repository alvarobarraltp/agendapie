const USUARIOS = [
  { rut: "12988965-9", clave: "77633333", nombre: "Educador/a PIE", rol: "admin" }
];

const ESTUDIANTES = [
  {
    id: 1, cur: "1°A", nom: "Miguel Angel Pérez Lagos",
    rut: "23483893-8", fnac: "22-10-2010", nee: "NEEP", diag: "DIL",
    direccion: "Av. Los Carrera 1234, Villa Los Pinos, Puerto Montt",
    telefono: "+56 9 8765 4321",
    apoderado: "María Lagos Díaz",
    ep: "23-11-2026", rp: "3/16/2028", pp: "José Barra Saez", nrp: "84235",
    vm: "4/21/2026", rm: "", pm: "Haiskell Deffit Alemán", rm_rut: "26134742-3", nrm: "522893",
    epsi: "12/1/2025", rpsi: "12/1/2027", ppsi: "Nataly Álvarez", psi_rut: "20032394-7", nrpsi: "354585",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 2, cur: "1°A", nom: "Catalina Anais Vergara Cárcamo",
    rut: "23420823-3", fnac: "04-09-2010", nee: "NEEP", diag: "DIL",
    direccion: "Pasaje El Roble 456, Población La Paloma, Puerto Montt",
    telefono: "+56 9 7654 3210",
    apoderado: "Juan Vergara Muñoz",
    ep: "11-11-2025", rp: "11/11/2027", pp: "Hellen Saldaña Carrillanca", nrp: "68062",
    vm: "4/21/2026", rm: "", pm: "Haiskell Deffit Alemán", rm_rut: "26134742-3", nrm: "522893",
    epsi: "17-03-25", rpsi: "17-03-27", ppsi: "Cinthia Arriagada", psi_rut: "19086903-2", nrpsi: "323602",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 3, cur: "1°A", nom: "Leonel Hernán Pradines Flández",
    rut: "23959701-7", fnac: "25-05-2012", nee: "NEEP", diag: "DIL",
    direccion: "Calle Pudeto 789, Sector Mirasol, Puerto Montt",
    telefono: "+56 9 6543 2109",
    apoderado: "Rosa Flández Reyes",
    ep: "16-03-2026", rp: "3/16/2028", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "", pm: "Sofía Vargas Fuentes", rm_rut: "16209745-8", nrm: "273619",
    epsi: "01-12-25", rpsi: "01-12-27", ppsi: "Nataly Álvarez", psi_rut: "20032394-7", nrpsi: "354585",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 4, cur: "1°A", nom: "Daniela Trinidad Solís Barriga",
    rut: "23882381-1", fnac: "13-02-2012", nee: "NEET", diag: "DEA",
    direccion: "Av. Presidente Ibáñez 321, Puerto Montt",
    telefono: "+56 9 5432 1098",
    apoderado: "Carmen Barriga Soto",
    ep: "25-03-2026", rp: "3/25/2028", pp: "José Barra Saez", nrp: "84235",
    vm: "", rm: "", pm: "", rm_rut: "", nrm: "",
    epsi: "no aplica", rpsi: "no aplica", ppsi: "no aplica", psi_rut: "", nrpsi: "",
    ef: "no aplica", rf: "no aplica", pf: "no aplica", f_rut: "", nrf: ""
  },
  {
    id: 5, cur: "1°A", nom: "Carla María Fernández Navarrete",
    rut: "23751918-3", fnac: "22-09-2011", nee: "NEET", diag: "DEA",
    direccion: "Pasaje Los Boldos 654, Villa Presidente Ríos, Puerto Montt",
    telefono: "+56 9 4321 0987",
    apoderado: "Luis Fernández Contreras",
    ep: "26-03-2026", rp: "26-3-2028", pp: "José Barra Saez", nrp: "84235",
    vm: "13-04-26", rm: "", pm: "Milena Monje", rm_rut: "174603332", nrm: "454610",
    epsi: "no aplica", rpsi: "no aplica", ppsi: "no aplica", psi_rut: "", nrpsi: "",
    ef: "no aplica", rf: "no aplica", pf: "no aplica", f_rut: "", nrf: ""
  },
  {
    id: 6, cur: "1°A", nom: "Javiera de Jesús Guzmán Lignay",
    rut: "23757744-2", fnac: "25-09-2011", nee: "NEET", diag: "DEA",
    direccion: "Calle Rengo 987, Pelluco, Puerto Montt",
    telefono: "+56 9 3210 9876",
    apoderado: "Patricia Lignay Morales",
    ep: "21-04-2026", rp: "21-3-2028", pp: "José Barra Saez", nrp: "84235",
    vm: "4/17/2026", rm: "", pm: "Milena Monje", rm_rut: "174603332", nrm: "454610",
    epsi: "no aplica", rpsi: "no aplica", ppsi: "no aplica", psi_rut: "", nrpsi: "",
    ef: "no aplica", rf: "no aplica", pf: "no aplica", f_rut: "", nrf: ""
  },
  {
    id: 7, cur: "1°A", nom: "Antonia Fernanda Barrientos Sáez",
    rut: "23511157-8", fnac: "01-12-2010", nee: "NEET", diag: "FIL",
    direccion: "Av. Diego Portales 147, Puerto Montt",
    telefono: "+56 9 2109 8765",
    apoderado: "Jorge Barrientos Pino",
    ep: "12-11-2025", rp: "12-11-2027", pp: "Teresa Schwencke", nrp: "174877",
    vm: "13-04-2026", rm: "", pm: "Milena Monje", rm_rut: "174603332", nrm: "454610",
    epsi: "29-03-25", rpsi: "29-03-27", ppsi: "Carlos Catalán", psi_rut: "176934727", nrpsi: "138415",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 8, cur: "1°A", nom: "Eimy Francisca Llenel Segura",
    rut: "23973398-0", fnac: "24-05-2012", nee: "NEET", diag: "DEA",
    direccion: "Pasaje El Canelo 258, Alerce, Puerto Montt",
    telefono: "+56 9 1098 7654",
    apoderado: "Ana Segura Campos",
    ep: "17-04-2026", rp: "4/17/2028", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "", pm: "Milena Monje", rm_rut: "174603332", nrm: "454610",
    epsi: "no aplica", rpsi: "no aplica", ppsi: "no aplica", psi_rut: "", nrpsi: "",
    ef: "no aplica", rf: "no aplica", pf: "no aplica", f_rut: "", nrf: ""
  },
  {
    id: 9, cur: "1°B", nom: "Sebastián Alberto Carrasco Ramírez",
    rut: "23646201-3", fnac: "5/13/2011", nee: "NEEP", diag: "TEA",
    direccion: "Calle Guillermo Gallardo 369, Puerto Montt",
    telefono: "+56 9 9876 5432",
    apoderado: "Claudia Ramírez Vera",
    ep: "25-11-25", rp: "25-11-27", pp: "Lorena Ortega Candia", nrp: "16806",
    vm: "17-04-26", rm: "17-04-28", pm: "Sofía Vargas", rm_rut: "16209745-8", nrm: "273619",
    epsi: "", rpsi: "", ppsi: "", psi_rut: "", nrpsi: "",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 10, cur: "1°B", nom: "Sofía Millaray Prieto Arismendi",
    rut: "23883973-4", fnac: "17-02-12", nee: "NEEP", diag: "TEA",
    direccion: "Av. Ejercito 741, Población Los Aromos, Puerto Montt",
    telefono: "+56 9 8765 4320",
    apoderado: "Roberto Prieto Silva",
    ep: "23-03-02", rp: "23-03-28", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "17-04-28", pm: "Sofía Vargas", rm_rut: "16209745-8", nrm: "273619",
    epsi: "", rpsi: "", ppsi: "", psi_rut: "", nrpsi: "",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 11, cur: "1°B", nom: "Erick Ignacio Quinchagual Urriaga",
    rut: "23924210-3", fnac: "13-04-12", nee: "NEEP", diag: "TEA",
    direccion: "Sector Mirasol, Pasaje 3 N°852, Puerto Montt",
    telefono: "+56 9 7654 3219",
    apoderado: "Verónica Urriaga Nahuelpan",
    ep: "20-04-26", rp: "13-03-28", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "17-04-28", pm: "Sofía Vargas", rm_rut: "16209745-8", nrm: "273619",
    epsi: "", rpsi: "", ppsi: "", psi_rut: "", nrpsi: "",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 12, cur: "1°B", nom: "Cristhian Bernardo Gallardo Paillán",
    rut: "23901400-3", fnac: "17-03-12", nee: "NEET", diag: "TDA",
    direccion: "Villa Los Riscos, Calle Los Avellanos 112, Puerto Montt",
    telefono: "+56 9 6543 2108",
    apoderado: "Sandra Paillán Quinchagual",
    ep: "13-03-26", rp: "13-03-28", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "17-04-28", pm: "Sofía Vargas", rm_rut: "16209745-8", nrm: "273619",
    epsi: "", rpsi: "", ppsi: "", psi_rut: "", nrpsi: "",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 13, cur: "1°B", nom: "Edison Fabián Delgado Ojeda",
    rut: "23787069-7", fnac: "30-10-11", nee: "NEET", diag: "TDA-H",
    direccion: "Población Padre Hurtado, Calle 5 N°334, Puerto Montt",
    telefono: "+56 9 5432 1097",
    apoderado: "Marcela Ojeda Fuentes",
    ep: "27-04-26", rp: "27-04-28", pp: "José Barra Saez", nrp: "84235",
    vm: "17-04-26", rm: "17-04-28", pm: "Sofía Vargas", rm_rut: "16209745-8", nrm: "273619",
    epsi: "13-04-2026", rpsi: "13-04-2028", ppsi: "Edgardo Rettig", psi_rut: "16964043-2", nrpsi: "188509",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 14, cur: "1°B", nom: "Pamela Antonella Iñil Barriga",
    rut: "23711112-5", fnac: "21-07-11", nee: "NEET", diag: "FIL",
    direccion: "Av. Los Pinos 567, Villa Las Quemas, Puerto Montt",
    telefono: "+56 9 4321 0986",
    apoderado: "Héctor Iñil Calfuqueo",
    ep: "14-11-25", rp: "14-11-27", pp: "Karla Imilpán Barría", nrp: "302211",
    vm: "17-04-26", rm: "17-04-28", pm: "Milena Monje", rm_rut: "17460333-2", nrm: "454610",
    epsi: "06-05-25", rpsi: "06-05-27", ppsi: "Carina Calfueque", psi_rut: "18733608-2", nrpsi: "263866",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 15, cur: "1°B", nom: "Jordán Alexis Márquez Gallardo",
    rut: "23431910-8", fnac: "13-09-10", nee: "NEET", diag: "FIL",
    direccion: "Calle Lota 890, Sector Centro, Puerto Montt",
    telefono: "+56 9 3210 9875",
    apoderado: "Isabel Gallardo Cárcamo",
    ep: "28-11-25", rp: "28-11-28", pp: "Teresa Schwenche Aguilera", nrp: "174877",
    vm: "17-04-2026", rm: "17-04-28", pm: "Milena Monje", rm_rut: "17460333-2", nrm: "454610",
    epsi: "13-03-2026", rpsi: "13-03-2028", ppsi: "Edgardo Rettig", psi_rut: "16964043-2", nrpsi: "188509",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  },
  {
    id: 16, cur: "1°B", nom: "Daniela Edith Quilempan Martínez",
    rut: "23804504-5", fnac: "23-11-11", nee: "NEET", diag: "FIL",
    direccion: "Población Kennedy, Pasaje 2 N°445, Puerto Montt",
    telefono: "+56 9 2109 8764",
    apoderado: "Felipe Quilempan Nahuelhual",
    ep: "25-11-25", rp: "25-11-27", pp: "Lorena Ortega Candia", nrp: "16806",
    vm: "17-04-26", rm: "17-04-28", pm: "Milena Monje", rm_rut: "17460333-2", nrm: "454610",
    epsi: "08-05-25", rpsi: "08-05-27", ppsi: "Lucia Ramirez Gaete", psi_rut: "15512913-1", nrpsi: "256282",
    ef: "", rf: "", pf: "", f_rut: "", nrf: ""
  }
];
