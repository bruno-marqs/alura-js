
// objeto
const cliente = {
    nome: "andré",
    idade: 36,
    cpf:"45678965422",
    email:"andre@email.com"
};

// imprimindo objeto
console.log(cliente);

// imprimindo atributos(valor) do objeto
console.log(cliente.email);

// imprimindo interpolação
console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos`)

// imprimindo parcialmente atributos
console.log(cliente.cpf.substring(0,3))