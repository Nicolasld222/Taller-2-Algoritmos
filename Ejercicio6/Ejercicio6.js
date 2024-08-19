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


//Función para obtener los números
function NumerosEscogidos() {
    let numero1 = Number(prompt("Elige tu primer número"));
    let numero2 = Number(prompt("Elige tu segundo número"));
    let numero3 = Number(prompt("Elige tu tercer número"));

    return [numero1, numero2, numero3]; 
}

// Función para identificar cuál es el número mayor
function Numeromayor(numero1, numero2, numero3) {
    return Math.max(numero1, numero2, numero3); // Usar Math.max para obtener el mayor y Math.min para el menor
}

// Función Principal
function Principal() {
    let numeros = NumerosEscogidos(); 
    let mayor = Numeromayor(numeros[0], numeros[1], numeros[2]); 

    alert(`Tu número mayor es ${mayor}`);
}

Principal();
