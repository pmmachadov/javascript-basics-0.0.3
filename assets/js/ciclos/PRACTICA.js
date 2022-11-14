// let a = 10;
// let b = a;
// a = 30;

// console.log({a, b});

let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});
// En js todos los objetos son pasados por referencia, es decir, si se modifica un objeto, se modifica el objeto original, no se crea una copia del objeto, por lo que si se modifica el objeto original, se modifica el objeto copiado. Para evitar esto, se puede usar el operador spread, que crea una copia del objeto, y no una referencia al objeto original.
//////////////////////////////
const cambiaNombre = ({...persona}) => {
persona.cambiaNombre = 'Tony';
return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});