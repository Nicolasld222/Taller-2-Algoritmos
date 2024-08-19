let Numero = Number(prompt("Ingrese un numero"))

if(Numero % 2 == 0){
    alert("Su numero es par")
} 
else{
    alert("Su numero es impar")
}

// Funcion

// Función para obtener el número del usuario
function NumeroEscogido() {
    return Number(prompt("Escoge un número"));
}

// Determinar si el número es par o impar
function PosNeg(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Función principal
function Principal() {
    let numero = NumeroEscogido(); 
    let numeroPosNeg = PosNeg(numero); 

    alert(`Su número es ${numero} y es ${numeroPosNeg}`);
}

Principal(); 


