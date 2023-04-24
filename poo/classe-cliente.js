// criando classe Cliente
export default class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

// instanciando novo objeto de Classe Cliente
const cl1 = new Cliente("Gilson", "gilson@email.com", "45688532415", 100);

// imprimindo objeto
console.log(cl1)

// executando função depositar
cl1.depositar(134);

// imprimindo novo saldo
cl1.exibirSaldo();