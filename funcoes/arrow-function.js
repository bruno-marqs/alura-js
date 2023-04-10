
// forma padrão de declarar função
function apresentar(nome ){
    return `Meu nome é ${nome}`
}

// como declarar arrow-function
const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// outro exemplo
const somarNumerosPequenos = (number1, number2) => {
    if (number1 > 10 || number2 > 10){
        return "somente números de 1 a 9"
    } else {
        return number1 + number2
    }
}