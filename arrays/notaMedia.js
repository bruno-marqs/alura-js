
console.log('Desenvolva um programa, utilizando array, que calcule a média entre as notas seguinte: 10, 6.5, 8 e 7.5\n')


// sem array
let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media1 = (nota1 + nota2 + nota3 + nota4)/4;
console.log(`Ex1: A média é:  + ${media1} + \n`); // resultado: 8


// com array sem loop
const notas = [10, 6.5, 8, 7.5];

let media2 = (notas[0], notas[1], notas[2], notas[3]) / notas.length;
console.log(`Ex2: A média é:  + ${media2} + \n`); // resultado: 8