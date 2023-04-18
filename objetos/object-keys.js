//objeto
const cliente = {
    nome: 'andré',
    idade: 36,
    cpf: '45678965422',
    email: 'andre@email.com',
    dependente: [
      { nome: 'Clara', parentesco: 'filha', dataNasc: '20/03/2024' },
      { nome: 'Pedro', parentesco: 'filho', dataNasc: '03/08/2023' }
    ],
    saldo:100, // alterando objeto, inserindo campo
    depositar:function(valor){     
        this.saldo += valor
    }
}

// criando array das keys do objeto (atributos)
const propsClientes = Object.keys(cliente);

// criando array dos valores dos atributos (keys)
const valuesCliente = Object.values(cliente);

// criando array com atributos e valores do objeto
const entries = Object.entries(cliente);

// imprimindo os arrays
console.log(propsClientes + "\n");
console.log(valuesCliente + "\n");
console.log(entries + "\n");

// criando método condicional
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependente")) {
        console.log(`Oferta de Seguro de Vida para ${obj.nome}`)
    } else {
        console.log("Não há dependentes")
    }
}

// executando o método
oferecerSeguro(cliente)