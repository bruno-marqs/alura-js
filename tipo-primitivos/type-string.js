// tipo STRING

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo simples!';

// cadeia de caracteres de tipos mistos
const senha = "SenhaSuperSegura@@456!";

// STRING de números
const stringDeNumeros = "4567";

// string de citação-1 (aspas simples fora, dupla dentro)
const citacao1 = 'O Leo disse "oi, tudo bem?"';

// string de citação-2 (aspas duplas fora, simples dentro)
const citacao2 = "O Leo disse 'oi, tudo bem?'";

// imprimindo as variaveis
console.log(texto1);
console.log(texto2);
console.log(senha);
console.log(stringDeNumeros);
console.log(citacao1);
console.log(citacao2);

// concatenação ('' + " ")
const concatenacao1 = "Meu nome é: ";
const meuNome = "Leonardo";

console.log(concatencao1 + meuNome);

const frase1 = "Eu tenho ";
const quantidade = 4;
const frase2 = " filhos";

console.log(frase1 + quantidade + frase2);


// template string ou template literal utiliza-se crase no lugar de aspas
const nome = "Bruno";
const dog = 1;
console.logo(`Meu nome é ${nome} e eu tenho ${dog} cachorro`)

// quebra de linha com crase
const mensagem = `Esta é
uma mensagem em
várias linhas`;
console.log(mensagem);


// comparando strings
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false


const cidade2 = "rio de janeiro";
const input2 = "Rio De Janeiro";

const inputMinusculo = input2.toLowerCase(); // torna a string em tudo minusculo

console.log(cidade2 === inputMinusculo); // true


// contando caracteres numa string
const senha2 = "minhasenha123"
console.log(senha.length) 