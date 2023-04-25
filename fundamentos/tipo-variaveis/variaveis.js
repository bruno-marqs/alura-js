
// VARIAVEL VAR (Variable)
var altura = 5;
var comprimento = 7;

// o var permite não declarar
primeiraArea = altura * comprimento;
console.log(`O valor da 1ª área é: ${primeiraArea} u.m²`);
// a boa prática determinar declarar antes
var primeiraArea; // --> PODE declarar depois de instanciar


// VARIÁVEL LET (Let = permitir)
let height = 10;
let width = 3;

// o let permite não declarar
segundaArea = height * width;
console.log(`O valor da 2ª área é: ${segundaArea} u.m²`);

// usando condicionais
let primeiraForma = 'retangulo';
let terceiraArea;

if (primeiraForma === 'retangulo') {
    terceiraArea = height * width;
} else {
    terceiraArea = (height * width) / 2; // área do triangulo
}

console.log(`O valor da 3ª área é: ${terceiraArea} u.m²`);
// let terceiraArea; --> NÃO PODE declarar depois de ser instaciada


// VARIÁVEL CONST (Constant)
const segundaForma = 'quadrado';
const lado = 4;
let perimetro; // se for declarado const, dará erro pois ela não foi inicializada

if (segundaForma === 'quadrado') {
    perimetro = lado + lado;
} else {
    perimetro = lado + lado + lado; // perimetro do triangulo
}
console.log(`O perímetro da ${segundaForma} é: ${perimetro} u.m`);