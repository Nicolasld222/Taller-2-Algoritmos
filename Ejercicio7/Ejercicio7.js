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

//Funcion

function Genero(){
    let Genero = Number(prompt("Escribe tu género: 1) Mujer 2) Hombre"));
    return Genero
}
Genero();

function Edad(){
    let Edad = Number(prompt("Escribe tu edad"));
    return Edad
}
Edad();

function mensaje(Edad, Genero){

    if (Edad >= 50 && Genero === 1) {
        return "Su mensualidad es de $120000";
    } else if (Edad >= 30 && Edad < 50 && Genero === 1) {
        return "Su mensualidad es de $100000";
    } else if (Edad >= 30 && Edad < 50 && Genero === 2) {
        return "Su mensualidad es de $40000";
    } else {
        return"No tienes ayuda de la alcaldía";
    }
}

mensaje();

function Principal(Genero, Edad, mensaje){
     let Gen = Genero();
     let Ed = Edad();
     let msj = mensaje(Genero, Edad);

     
     
     alert(`Su ${Gen} y su edad es ${Ed} y tu ayuda es de ${msj}`)
}
Principal();
