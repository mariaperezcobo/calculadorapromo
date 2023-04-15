let precio = Number(prompt("Ingrese el precio unitario a consultar"));

if (precio > 0){
    alert ("El precio unitario a consultar es: " + precio);
} else { alert ("No ingresaste ningun valor. Por favor ingresar el precio unitario");
}


let numPromo2x1 = 2;
let numPromo3x2 = 2/3;
let numPromo2da80 = 0.6;
let numPromo2da50 = 0.75;
let num20deDto = 0.8;

function promo2x1 (precio, numPromo2x1) {
    return (precio / numPromo2x1).toFixed(2) ;
}
function promo3x2 (precio, numPromo3x2) {
    return (precio * numPromo3x2).toFixed(2) ;
}
function promo2daAl80 (precio, numPromo2da80) {
    return (precio * numPromo2da80).toFixed(2) ;
}
function promo2daAl50 (precio, numPromo2da50) {
    return (precio * numPromo2da50).toFixed(2) ;
}
function promo20dto (precio, num20deDto) {
    return (precio * num20deDto).toFixed(2) ;
}

console.log ("Calculadora de promociones: cuánto cuesta cada unidad de un producto con cada promoción")

console.log("")

console.log(`El precio unitario consultado es: ${precio}`)

console.log("")

let resultado2daAl80 = promo2daAl80(precio, numPromo2da80) ;
console.log(`El precio por unidad con promo de 80% de descuento en la 2da unidad es: ${resultado2daAl80}`);

let resultado2daAl50 = promo2daAl50(precio, numPromo2da50) ;
console.log(`El precio por unidad con promo de 50% de descuento en la 2da unidad es: ${resultado2daAl50}`);

let resultado20dto = promo20dto(precio, num20deDto) ;
console.log(`El precio por unidad con promo de 20% de descuento es: ${resultado20dto}`);

let resultado2x1 = promo2x1(precio, numPromo2x1) ;
console.log(`El precio por unidad con promo de 2x1 es: ${resultado2x1}`);

let resultado3x2 = promo3x2(precio, numPromo3x2) ;
console.log(`El precio por unidad con promo de 3X2 es: ${resultado3x2}`);


for (let i = 1; i <= 3 ; i++) {
    let resultado = (precio * i / 4).toFixed(2) ;
    console.log("El precio por unidad con promo de 4 x "+ i + " es " + resultado);
}
