// objeto
const cliente = {
    nome: "andré",
    idade: 36,
    cpf:"45678965422",
    email:"andre@email.com"
};

// criando variavel para acessar objeto
const atributo = "idade";
console.log(cliente[idade]);

// criando array com as chaves (atributos)
const chaves = ["nome", "idade", "cpf", "email"];

// acessando valores do objeto através do array
console.log(cliente[chaves[0]]);

// usando forEach + array para imprimir os valores do objeto
chaves.forEach(info => console.log(cliente[info]));