// objeto
const cliente = {
    nome: "andré",
    idade: 36,
    cpf:"45678965422",
    email:"andre@email.com"
};

// criando objeto como atributo
cliente.dependente = {
    nome: "Clara",
    parentesco: "filha",
    dataNasc: "20/03/2024"
};

// imprimindo
console.log(cliente);

// alterando valores da composição de objetos
cliente.dependente.nome = "Isabela"
console.log(cliente);