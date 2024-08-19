var matematicas = window.prompt("Escribe tu nota de matematiacas")
var Fisica = window.prompt("Escribe tu nota de Fisica")
var informatica = window.prompt("Escribe tu nota de Informatica")
var biologia = window.prompt("Escribe tu nota de Biologia")
var quimica = window.prompt("Escribe tu nota de Quimica")

const number = Promedio = (matematicas + Fisica + informatica + biologia + quimica) / 5

alert(Promedio)

// Funcion 

//Matematicas
function matematicas(){
    let Notam = Number(prompt("Ingresar su nota en la materia de matematicas"));
    return Notam;
}

//Fisica
function fisica(){
    let NotaF = Number(prompt("Ingresar su nota en la materia de fisica"));
    return NotaF;
}

//Quimica
function quimica(){
    let Notaq = Number(prompt("Ingresar su nota en la materia de quimica"));
    return Notaq;
}

//Biologia
function biologia(){
    let NotaB = Number(prompt("Ingresar su nota en la materia de biologia"));
    return NotaB;
}

//Informatica
function informatica(){
    let Notai = Number(prompt("Ingresar su nota en la materia de informatica"));
    return Notai;
}

// Funcion promedio
function promedio(matematicas, fisica, quimica, biologia, informatica){
    let promediototal = (matematicas + fisica + quimica + biologia + informatica) / 5;
    return promediototal;
}

// Funcion calificación
function calificacion(promedio){
    if(promedio > 8){
        return "Excelente";
    } else if(promedio >= 6){
        return "Bueno";
    } else {
        return "Malo";
    }
}

// Funcion principal
function principal(){
    let notaMatematicas = matematicas();
    let notaFisica = fisica();
    let notaQuimica = quimica();
    let notaBiologia = biologia();
    let notaInformatica = informatica();

    let promedioTotal = promedio(notaMatematicas, notaFisica, notaQuimica, notaBiologia, notaInformatica);
    let calificacionFinal = calificacion(promedioTotal);

    alert(`Su promedio de notas es ${promedioTotal} y su calificación es ${calificacionFinal}`);
}

principal();
