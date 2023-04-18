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

// iniciando variavel
let relatorio = "";

// usando for in para percorrer os atributos objeto
for (let info in cliente) {
    relatorio += `${info} - `
};
// imprimindo relatorio
console.log(relatorio + "\n");

// usando for in para percorrer os valores dos atributos do objeto
for (let info in cliente) {
    relatorio += `${cliente[info]} - ` 
};
// imprimindo relatorio
console.log(relatorio + "\n");

// usando for in para percorrer os valores dos atributos do objeto, ignorando objetos e funções
for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}` //melhorando o template string
    }
};
// imprimindo relatorio
console.log(relatorio + "\n");
