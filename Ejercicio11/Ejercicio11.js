alert("Inicie su computadora");

// Solicita al usuario si hay un pitido al iniciar
let pitido = window.prompt("¿Al iniciarse tiene un pitido? 1 SI 2 NO").trim();

// Solicita al usuario si el disco gira
let discoGira = window.prompt("¿El disco gira? 1 SI 2 NO").trim();

// Verifica el estado de la computadora y muestra el mensaje adecuado
if (pitido == 1) {
    if (discoGira == 1) {
        alert("Póngase en contacto con el técnico de apoyo.");
    } else if (discoGira == 2) {
        alert("Verificar contactos de la unidad.");
    } else {
        alert("Ingrese bien el caso de la computadora.");
    }
} else if (pitido == 2) {
    if (discoGira == 1) {
        alert("Compruebe las conexiones de altavoces.");
    } else if (discoGira == 2) {
        alert("Traiga la computadora para repararla en la central.");
    } else {
        alert("Ingrese bien el caso de la computadora.");
    }
} else {
    alert("Ingrese bien el caso de la computadora.");
}
