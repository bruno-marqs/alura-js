
// criando função construtor
function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){

    }
}

// instanciando novo objeto da classe Cliente
const drive = new Cliente("drive", "75385245533", "drive@email.com", 250);

// imprimindo objeto
console.log(drive)