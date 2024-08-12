
let one = Number(prompt("Digita 1 : Nevera Grande 4000 por hora, Digita 2: Nevera Pequeña 3000 por hora "));
let Cantidadlav = Number(prompt("¿Cuantas neveras deseas alquilar?"));
let CantidadH = Number(prompt("¿Durante cuántas horas la deseas alquilar?"));

let Costototal;
let Descuento;
let CostototalConDescuento;

// Calcular el costo para nevera grande
if (one === 1) {
    Costototal = 4000 * CantidadH * Cantidadlav;
    if (Cantidadlav > 3) {
        Descuento = Costototal * 0.03;
        CostototalConDescuento = Costototal - Descuento;
        alert("El precio de las " + Cantidadlav + " neveras grandes con descuento será de " + CostototalConDescuento);
    } else {
        alert("El precio de las " + Cantidadlav + " neveras grandes será de " + Costototal);
    }
}
// Calcular el costo para nevera pequeña
else if (one === 2) {
    Costototal = 3000 * CantidadH * Cantidadlav;
    if (Cantidadlav > 3) {
        Descuento = Costototal * 0.03;
        CostototalConDescuento = Costototal - Descuento;
        alert("El precio de las " + Cantidadlav + " neveras pequeñas con descuento será de " + CostototalConDescuento);
    } else {
        alert("El precio de las " + Cantidadlav + " neveras pequeñas será de " + Costototal);
    }
} else {
    alert("Opción inválida. Por favor, elige 1 para nevera grande o 2 para nevera pequeña.");
}

