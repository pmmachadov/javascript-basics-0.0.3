let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });
// En js todos los objetos son pasados por referencia, es decir, si se modifica un objeto, se modifica el objeto original, no se crea una copia del objeto, por lo que si se modifica el objeto original, se modifica el objeto copiado. Para evitar esto, se puede usar el operador spread, que crea una copia del objeto, y no una referencia al objeto original.

// Todos los primitivos se pasan por valor y todos los objetos se pasan por referencia.


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });
//La copia de un objeto se puede hacer con el operador spread que son los ... tres puntos. Si se quiere hacer una copia de un objeto, se debe usar el operador spread, ya que si se usa el operador =, se crea una referencia al objeto original, y no una copia del objeto.


// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });