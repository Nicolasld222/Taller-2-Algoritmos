let Genero = Number(prompt("Escribe tu género: 1) Mujer 2) Hombre"));
let Edad = Number(prompt("Escribe tu edad"));

if (Edad >= 50 && Genero === 1) {
    alert("Su mensualidad es de $120000");
} else if (Edad >= 30 && Edad < 50 && Genero === 1) {
    alert("Su mensualidad es de $100000");
} else if (Edad >= 30 && Edad < 50 && Genero === 2) {
    alert("Su mensualidad es de $40000");
} else {
    alert("No tienes ayuda de la alcaldía");
}




// Función para obtener el género
function Genero() {
    return prompt("Escribe tu género: 1) Mujer 2) Hombre").trim().toLowerCase();
}

// Función para obtener la edad
function Edad() {
    return Number(prompt("Escribe tu edad"));
}

// Función para generar el mensaje basado en la edad y el género
function mensaje(Edad, Genero) {
    if (Edad >= 50 && Genero === 'mujer') {
        return "Su mensualidad es de $120000";
    } else if (Edad >= 30 && Edad < 50 && Genero === 'mujer') {
        return "Su mensualidad es de $100000";
    } else if (Edad >= 30 && Edad < 50 && Genero === 'hombre') {
        return "Su mensualidad es de $40000";
    } else {
        return "No tienes ayuda de la alcaldía";
    }
}

// Función principal que coordina el flujo
function Principal() {
    let Gen = Genero(); // Obtiene el género
    let Ed = Edad(); // Obtiene la edad
    let msj = mensaje(Ed, Gen); // Genera el mensaje basado en el género y la edad
    
    alert(`Tu género es ${Gen === 'mujer' ? 'Mujer' : 'Hombre'}, tu edad es ${Ed} y ${msj}`);
}

Principal(); // Llama a la función principal

