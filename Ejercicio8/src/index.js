let tarifa1 = 18000
let tarifa2 = 35000
let tarifa3 = 89000
let tarifa = prompt ("ingrese cantidad de dias")
let valormensualidad = true

if(valormensualidad){
if(tarifa >=0 && tarifa <= 15){
    alert("el Valor de tu mensualidad es de " + tarifa1)
}else if(tarifa > 15 && tarifa <= 30){
    alert("el valor de tu mensualidad es de " + tarifa2)
}else if(tarifa > 30 && tarifa <= 90){
    alert("el valor de tu mensualidad es de " + tarifa3)
}
}
