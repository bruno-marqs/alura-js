// importando classe-mãe
import Cliente from "./classe-cliente.js"

// criando nova classe
export default class ClienteInvest extends Cliente {
    constructor(nome, email, cpf, saldo, valorInvest){
        super(nome, email, cpf, saldo);
        this.valorInvest = valorInvest
    }

    // criando método privado
    #investir(valor){
        this.valorInvest = valor * 0.015
    }

    // criando método público para ser executado fora da Classe
    aplicarInvest(invest){
        return this.#investir(invest);
    }
}
