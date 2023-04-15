/*let precio = prompt("Ingrese el precio unitario");

if (precio == "" || precio == 0){
    alert ("No ingresaste ningun valor")
} else { alert ("El precio unitario a consultar es: " + precio);
}

console.log(`el precio es: ${precio}`);
*/

let precio = Number(prompt("Ingrese el precio unitario a consultar"));

if (precio == "" || precio == 0){
    alert ("No ingresaste ningun valor")
} else { alert ("El precio unitario a consultar es: " + precio);
}

let numPromo2x1 = 2;
let numPromo3x2 = 2/3;
let numPromo2da80 = 0.6;
let num20deDto = 0.8;

function promo2x1 (precio, numPromo2x1) {
    return precio / numPromo2x1 ;
}
function promo3x2 (precio, numPromo3x2) {
    return precio * numPromo3x2 ;
}
function promo2daAl80 (precio, numPromo2da80) {
    return precio * numPromo2da80 ;
}
function promo20dto (precio, num20deDto) {
    return precio * num20deDto ;
}

console.log ("Calculadora de promociones: cuánto te queda cada unidad con cada promoción")

console.log("")

console.log(`El precio unitario consultado es: ${precio}`)

console.log("")

let resultado2x1 = promo2x1(precio, numPromo2x1) ;
console.log("La unidad con promo de 2x1 queda en: " + resultado2x1);

let resultado2daAl80 = promo2daAl80(precio, numPromo2da80) ;
console.log("La unidad con promo de 80% de descuento en la 2da unidad queda en: " + resultado2daAl80);

let resultado3x2 = promo3x2(precio, numPromo3x2) ;
console.log("La unidad con promo de 3X2 queda en: " + resultado3x2);

let resultado20dto = promo20dto(precio, num20deDto) ;
console.log("La unidad con promo de 20% de descuento queda en: " + resultado20dto);

let precio2 = 20
for (let i = 1 ; i <= 3 ; i++) {
    let resultado3 = precio2 * i ;
}
console.log("La unidad con promo delconsultado es: " + resultado3);



/*
let precio = Number(prompt("Ingrese el precio unitario"));
let promo = prompt("Ingrese el tipo de promo a calcular: 1. 2x1, 2. 3x2, 3. 2da unidad al 80% de dto ");
let promo2x1 = 2; 
let promo3x2 = 2/3;
let promo2da80 = 0.6;

switch (promo){
    case "1":
        console.log ("El valor unitario con 2x1 es " + precio/promo2x1)
        break;
    case "2":
            console.log ("El valor unitario con 3x2 es " + precio*promo3x2)
            break;
    case "2":
            console.log ("El valor unitario con la 2da al 80% de descuento es " + precio*promo2da80)
                break;
    default:
        console.log(`No aplica`)
        break;
}
*/