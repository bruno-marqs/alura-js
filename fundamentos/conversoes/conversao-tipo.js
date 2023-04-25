
//Tipo de Dados
// booleanos

// CONVERSÃO IMPLÍCITA
var numero = 456;
var numeroString = "456";

// Comparando valor e tipo
console.log(numero === numeroString); // resultado: false
// Comparando valor
console.log(numero == numeroString); // resultado: true

// Somando valores (concatenando) 
console.log(numero + numeroString); // resultado:456456
// -------------------------------------------------------------

// CONVERSÃO EXPLÍCITA
// Utilizando Number() e String()
console.log(numero + Number(numeroString)); // resultado: 912

// ATENÇÃO!!
const numeroStringLetra = "456a"
console.log(numero + Number(numeroStringLetra)); // resultado: NaN (Not a Number)

