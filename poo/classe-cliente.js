// criando classe Cliente
export default class Cliente {
    #nome
    constructor(nome, email, cpf, saldo){
        this.#nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    // criando getters
    get getNome(){
        return this.#nome;
    }

    // criando setters
    set setNome(novoNome){
        // fazendo tratamento de erro
        if (novoNome === ''){
            throw new Error ('Formato não válido')
        } else {
            this.#nome = novoNome;
        };
    }

    // métodos de classe
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

