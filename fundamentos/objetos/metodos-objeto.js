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
// conferindo saldo
console.log(cliente.saldo);

// alterando saldo
cliente.depositar(30)

// conferindo novo saldo
console.log(cliente.saldo)


  


