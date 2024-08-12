

const PriV = window.prompt("Escribe tu nombre")

const SegV = window.prompt("Escribe el total de horas trabajadas")



if(SegV <= 10)  {
    X = SegV * 30000 
    alert("Señor o señora "  + PriV + " El numero de horas es " + SegV + " Y su salario equivale a "+ X)
}
else{
    (SegV >= 10)
    X = SegV * 33000
    alert("Señor o señora "+ PriV + " El numero de horas es " + SegV + " Y su salario equivale a " + X)
}


