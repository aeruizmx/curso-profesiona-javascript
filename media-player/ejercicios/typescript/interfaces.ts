//INTERFACES
enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
}
interface Rectangulo {
  ancho:number,
  alto:number,
  color?:Color
}

let rec: Rectangulo = {
  ancho: 4,
  alto: 6,
}

function area(r: Rectangulo):number{
  return r.alto * r.alto;
}
const arearec = area(rec);
console.log(arearec);

rec.toString = function() {
  return `Un rectangulo ${this.color}`;
}
console.log(rec.toString());