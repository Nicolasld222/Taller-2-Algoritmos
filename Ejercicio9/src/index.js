let angulo1 = prompt("ingrese el valor del angulo Alpha")
let angulo2 = prompt("ingrese el valor del angulo Beta")
let angulo3 = prompt("ingrese el valor del angulo Gamma")

angulo1 = parseInt(angulo1)
angulo2 = parseInt(angulo2)
angulo3 = parseInt(angulo3)

const anguloFinal = 180
const triangulo = true

if(triangulo){
if(angulo1 + angulo2 + angulo3 == anguloFinal ){
    alert("Es un triangulo")
}else{
    alert("No es un Triangulo, la suma de los angulos no es igual a 180°")
}
}