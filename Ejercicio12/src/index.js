let serial = [119, 179, 189, 195, 221, 780]

let modelo = parseInt(prompt("Ingresa el modelo de tu vehiculo"))

if(serial.includes(modelo)){
    alert("el automóvil esta defectuoso, llevar a garantía")
}else{
    alert("Su automóvil no está defectuoso")
}
