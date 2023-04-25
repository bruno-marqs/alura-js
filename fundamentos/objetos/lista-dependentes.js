// objeto
const cliente = {
    nome: "andré",
    idade: 36,
    cpf:"45678965422",
    email:"andre@email.com"
};

// criando array de objeto como atributo
cliente.dependente = [{
    nome: "Clara",
    parentesco: "filha",
    dataNasc: "20/03/2024"
}];

// conferindo alteração
console.log(cliente);

// inserindo objeto na array de objetos
cliente.dependente.push({
    nome: "Pedro",
    parentesco: "filho",
    dataNasc: "03/08/2023"
});

// conferindo alteração
console.log(cliente);

// seleciando objeto da array de objeto
const filho = cliente.dependente.filter(dependente => dependente.parentesco === "filho")

// conferindo seleção
console.log(filho[0].nome);