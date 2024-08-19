let X = Number(prompt("Escribe un numero"));


if(X >= 0) {
    alert("Su numero es positivo")
}
else { 
    alert("Su numero es negativo")
}

//Funcion 

// Función para obtener el número del usuario
function NumeroElegido(){
    let Num = Number(prompt("Escribe un número"));
    return Num;
}

// Determinar si el número es positivo, negativo o neutro
function NegPos(Num){
    if(Num > 0) {
        return "Positivo";
    } else if(Num === 0){ 
        return "Neutro";
    } else {
        return "Negativo";
    }
}

// Función principal
function Principal(){
    let NumeroEscogido = NumeroElegido();
    let NumeroPosNeg = NegPos(NumeroEscogido);

    alert(`Su número es ${NumeroEscogido} y es ${NumeroPosNeg}`);
}

Principal();



