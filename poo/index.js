//importando classes
import Cliente from "./classe-cliente.js"
import ClientePoupanca from "./classe-cliente-poupanca.js"
import ClienteInvest from "./classe-cliente-invest.js"

// instanciando objetos, alterando e imprimindo alteração
const novoCliente = new Cliente('Pedro', 'pedro@email.com', '78935744822', 250);
console.log(novoCliente);

novoCliente.nome = "Guilherme"; //alterando valor do atributo do objeto
console.log(novoCliente.nome);


const novoClientePoupanca = new ClientePoupanca('Julia', 'julia@email.com', '85462533388', 100, 300);
console.log(novoClientePoupanca);

novoClientePoupanca.#nome = 'Maria'; // error: tentando alterar o valor de um atributo privado da Classe ClientePoupança


// instanciando objeto ClienteInvest
const cinv1 = new ClienteInvest('Bruno', 'b@email.com', '74512695578', 250, 0);
// executando método 
cinv1.aplicarInvest(50);
// imprimindo 
console.log(cinv1.valorInvest)