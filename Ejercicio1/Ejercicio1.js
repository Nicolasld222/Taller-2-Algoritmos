

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

// Funcion

function calcularSalario(empleado, horas, salario){
     empleado = prompt("Ingrese su nombre")
     horas = Number(prompt("Ingresa el numero de horas que has trabajado"))
     salario = 0
if(horas < 10){
    salario=(horas * 30000)
}else salario=(horas * 33000)

alert(`Señor ${empleado} el numero de horas es ${horas} y Su salario equivale a: ${salario}`)
}
calcularSalario()

