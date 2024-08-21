let cantidad = [1,10000000]

let impresion = prompt("Ingrese la cantidad de hojas que desea imprimir")

let totalImpresion = true

if(totalImpresion){
if(impresion > 0 && impresion <= 499){
    alert("el valor de tu impresion es " + impresion * 120)
}else if(impresion > 499 && impresion <= 749){
    alert("el valor de tu impresion es " + impresion * 100)
}else if(impresion > 749 && impresion <= 999){
    alert("el valor de tu impresion es " + impresion * 80)
}else if(impresion > 999){
    alert("el valor de tu impresion es " + impresion * 50)
}
}

// Función para obtener la cantidad de impresiones
function Impresiones() {
    return Number(prompt("Ingrese la cantidad de hojas que desea imprimir"));
}

// Función para calcular el precio de las impresiones
function precio(impresiones) {
    if (impresiones > 0 && impresiones <= 499) {
        return impresiones * 120;
    } else if (impresiones > 499 && impresiones <= 749) {
        return impresiones * 100;
    } else if (impresiones > 749 && impresiones <= 999) {
        return impresiones * 80;
    } else if (impresiones > 999) {
        return impresiones * 50;
    }
}

// Función principal para coordinar el flujo
function Principal() {
    let totalImpresion = Impresiones(); // Obtiene la cantidad de impresiones
    let preciototal = precio(totalImpresion); // Calcula el precio basado en la cantidad de impresiones

    alert(`La cantidad de impresiones es ${totalImpresion} y el total sería $${preciototal}`);
}

Principal(); // Llama a la función principal
