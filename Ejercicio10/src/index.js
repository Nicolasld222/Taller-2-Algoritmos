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