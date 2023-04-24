// importando classe-mãe
import Cliente from "./classe-cliente.js"

// criando nova classe
class ClienteInvest extends Cliente {
    constructor(nome, email, cpf, saldo, valorInvest){
        super(nome, email, cpf, saldo);
        this.valorInvest = valorInvest
    }

    investir(valor){
        this.valorInvest = valor * 0.015
    }
}
