
// 1) declara a função
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)
imprimeTexto("oi");
imprimeTexto("tudo bem");
imprimeTexto("vamos praticar?");

// função sem parâmetro
function soma(){
    const resultado = 2 + 2;
    return resultado
}

console.log(soma());


// usando funções como parametros
function sum(number1, number2) {
    return number1 + number2;
}

function multiply(parametro1, parametro2){
    return parametro1 * parametro2;
}

const resultado = multiply(sum(4, 5), sum( 2, 6))
console.log(`O resultado final é: ${resultado}`)


// Expressão de Função
const somar = function(num1, num2) { return num1 + num2}
console.log(somar(1,1));