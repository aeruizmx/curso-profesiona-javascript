// console.log("Hello, typescript");

// function add(a: number,b: number){
//   return a + b
// }

// const sum = add(2,3);

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
// people.push(9000); // No funciona porque el arreglo es de strings solamente

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

//FUNCIONES
function add (a:number, b:number):number{
  return a + b;
}

const sum = add(4,10);

//FUNCIONES QUE REGRESAN FUNCIONES
function createAdder(a:number): (number) => number{
  return function(b:number){
    return b + a;
  }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//UN PARAMETRO OPCIONAL UNDEFINED/STRING
function fullName(firstname:string, lastname? : string):string{
  return `${firstname} ${lastname}`;
}
const andres = fullName('Andres');

//UN PARAMETRO POR DEFAULT
function fullName2(firstname:string, lastname : string = "Perez"):string{
  return `${firstname} ${lastname}`;
}
const andres2 = fullName2('Andres');
