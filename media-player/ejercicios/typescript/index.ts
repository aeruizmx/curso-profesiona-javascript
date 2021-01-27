console.log("Hello, typescript");

function add(a: number,b: number){
  return a + b
}

const sum = add(2,3);

console.log("TIPOS");
//BOOLEAN - No se puede reasignar a otros tipos de variables
let muted:boolean = true;

//NUMEROS
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador / denominador;

//STRING
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

//ARREGLO
let people: string[] = [];
people = ["Juan", "Maria", "Jose"];
people.push(9000); // No funciona porque el arreglo es de strings solamente

let peopleAndNumbers: Array<string | number>  = []; //Arreglo de strings o numbers
peopleAndNumbers.push("Andres")
peopleAndNumbers.push(1);

//ENUM
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}
let colorFav: Color = Color.Rojo;
console.log(`Color fav es ${colorFav}`)

//ANY
let comodin:any = "Joker"
comodin = {type:"wildcard"};

//OBJECT
let objeto:Object = {type:"wildcard"}
