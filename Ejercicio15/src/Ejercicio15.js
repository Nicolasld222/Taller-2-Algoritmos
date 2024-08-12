
let obtenerCarta = function() {
    return Math.floor(Math.random() * 10) + 1;
};

let puntuacionUsuario = obtenerCarta() + obtenerCarta();
let puntuacionComputadora = obtenerCarta() + obtenerCarta();

alert("Tus cartas iniciales suman: " + puntuacionUsuario);

let pedirTerceraCarta = prompt("¿Deseas otra carta? (A para sí, cualquier otra tecla para no)").toUpperCase();

if (pedirTerceraCarta === "A") {
    puntuacionUsuario += obtenerCarta();
    if (puntuacionComputadora < 15) {
        puntuacionComputadora += obtenerCarta();
    }
}

let verCartas = prompt("¿Quieres ver las cartas? (A para sí, cualquier otra tecla para no)").toUpperCase();

if (verCartas === "A") {
    alert("Tu puntuación final: " + puntuacionUsuario + "\nPuntuación de la computadora: " + puntuacionComputadora);

    if (puntuacionUsuario > 21 && puntuacionComputadora > 21) {
        alert("Ambos perdieron. Las puntuaciones superan 21.");
    } else if (puntuacionUsuario > 21) {
        alert("La computadora gana. Tu puntuación superó 21.");
    } else if (puntuacionComputadora > 21) {
        alert("¡Ganaste! La puntuación de la computadora superó 21.");
    } else if (puntuacionUsuario > puntuacionComputadora) {
        alert("¡Ganaste! Tu puntuación es mayor.");
    } else if (puntuacionComputadora > puntuacionUsuario) {
        alert("La computadora gana. Su puntuación es mayor.");
    } else {
        alert("Es un empate.");
    }
} else {
    alert("Juego terminado sin revelar las cartas.");
}