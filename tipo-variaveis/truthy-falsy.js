
// boolean
const usuarioLogado = true;
const contaPaga = false;

console.log(`A variavel usuarioLogado é: ${usuarioLogado}`);
console.log(`A variavel contaPaga é: ${contaPaga}\n`);


// TRUTHY OR FALSE

// 0 => false
// 1 => true

// comparando valores
console.log("0 é igual a false? ")
console.log(0 == false);  // resultado: true
console.log("1 é igual a true? ")
console.log(1 == true); // resultado: true

// string vazia
console.log("string vazia é igual a false? ")
console.log("" == false);
console.log("") 


// explicando a palavra-chave typeof
let numero = 3;
let texto = "Alura";

console.log("A variavel numero é tipo: " + typeof numero);
console.log("A variavel texto é tipo: " + typeof texto + "\n");


// NULL ==> vazio ou nada
let varNull = null;
console.log("A variavel varNull é: " + varNull);
console.log("A variavel varNull é do tipo: " + typeof varNull + "\n");

let minhaVar; // variável UNDEFINED
console.log("A variavel minhaVar é tipo: " + typeof minhaVar);