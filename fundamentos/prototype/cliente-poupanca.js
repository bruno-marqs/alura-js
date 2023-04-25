// criando objeto Cliente
function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){

    }
}

// criando objeto ClientePoupança
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo); // herança
    this.saldoPoup = saldoPoup;
}

// instanciando novo objeto
const cliente1 = new ClientePoupanca("João", "85496578622", "joao@email.com", 110, 230)

// imprimindo cliente1
console.log(cliente1)

// criando nova função para classe ClientePoupança através do método 'prototype'
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

// executando função
cliente1.depositarPoup(30)

// verificando resultado
console.log(cliente1.saldoPoup)