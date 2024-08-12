const numero1 = window.prompt("Escribe tu primer numero")
const numero2 = window.prompt("Escribe tu segundo numero")
const numero3 = window.prompt("Escribe tu tercer numero")


if (numero1 > numero2) {
    x = numero1;
    
}else{
    x = numero2;
    
}

if (x > numero3) {
    mayor = x;
    
}else{
    mayor = numero3;
    
}
alert ("tu numero mayor es "+ mayor)