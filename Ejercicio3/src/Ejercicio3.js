
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





//Funcion




alert("Hola, bienvenido a nuestra página para alquilar lavadoras. El precio por hora será Grande: 4000, Pequeña: 3000");

//Lavadora escogida
function TipoDeLavadora(){
    let tipoLava = Number(prompt("¿Qué tipo de lavadoras deseas alquilar? Ingrese 1) Grandes 2) Pequeñas"));
    
    if(tipoLava == 1){
        return 'Grande';
    } else if(tipoLava == 2){
        return 'Pequeña';
    } else {
        return null;
    }
}

//Precio de la lavadora
function ValorLavadora(tipoDeLavadora){
    if(tipoDeLavadora === 'Grande'){
        return 4000;
    } else if(tipoDeLavadora === 'Pequeña'){
        return 3000;
    } else {
        return 0;
    }
}

//Cantidad de lavadoras
function CantidadLav(){
    return Number(prompt("¿Cuántas lavadoras deseas alquilar?"));
}

//Cuántas Horas
function HorasAlquiladas(){
    return Number(prompt("¿Durante cuántas horas las deseas alquilar?"));
}

//Descuento
function Descuento(valorLavadora, cantidadLav, horasAlquiladas){
    let costoTotal = valorLavadora * cantidadLav * horasAlquiladas;
    
    if(cantidadLav > 3){
        let descuento = costoTotal * 0.03;
        costoTotal -= descuento;
    }
    
    return costoTotal;
}

function Principal(){
    let tipo = TipoDeLavadora();
    let valor = ValorLavadora(tipo);
    let cantidad = CantidadLav();
    let horas = HorasAlquiladas();
    let costoTotal = Descuento(valor, cantidad, horas);
    
    alert(`Su tipo de lavadora es ${tipo}. La cantidad que vas a alquilar es ${cantidad}. El costo total va a ser de ${costoTotal}.`);
}

Principal();

