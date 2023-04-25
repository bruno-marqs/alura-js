// comparando valores atribuidos às variáveis

const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero === segundoNumero); //false

const terceiroNumero = 4;
const quartoNumero = 4;

console.log(terceiroNumero === quartoNumero);  // true


// comparando strings
const texto1 = "Alura";
const texto2 = "fruta";

console.log(texto1 === texto2); // false


//operações lógicas ou booleanas
// exemplo 1
const msg1 = true;

if (msg1 == true) {
    console.log("Mensagem #1 é verdadeira")
} else {
    console.log("Mensagem #1 é falsa")
}

// exemplo 2
const msg2 = false;

if (msg2 == true) {
    console.log("Mensagem #2 é verdadeira")
} else {
    console.log("Mensagem #2 é falsa")
}