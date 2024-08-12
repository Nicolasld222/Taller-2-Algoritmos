var total = 0
var sanPeq = confirm("quiere su Sandwich pequeño?")
var sanGra

if(sanPeq == true){
    total += 6000;
}
else{
    var sanGra = confirm("quiere su Sandwich grande?")
}

if(sanGra==true){
    total += 12000;
}
var jalap = confirm("quiere Jalapeño en su sandwich?")

if(jalap == true){
    total += 0;
}

var pavo = confirm("quiere Pavo en su sandwich?")

if(pavo == true){
    total += 3000;
}

var tocin = confirm("quiere Tocineta en su sandwich?")

if(tocin == true){
    total += 3000;
}

var queso = confirm("quiere Queso en su sandwich?")
 
if(queso == true){
    total += 2500;
}

alert("el valor de su pedido es de: " + total)




