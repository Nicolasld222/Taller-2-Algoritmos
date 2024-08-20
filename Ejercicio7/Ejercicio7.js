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
