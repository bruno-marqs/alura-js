// importando classe-mãe
import Cliente from "./classe-cliente.js"

// criando classe-filha por Herança
export default class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca
    }
    // criando método exclusivo de Poupança
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

// instanciando objeto de classe ClientePoupanca
const cl2 = new ClientePoupanca("Maria", "maria@email.com", "78945612355", 100, 200);

// imprimindo objeto criado
console.log(cl2);

// executando método de depositarPoupança
cl2.depositarPoupanca(45);

// imprimindo novo saldoPoupança
console.log(cl2.saldoPoupanca);

