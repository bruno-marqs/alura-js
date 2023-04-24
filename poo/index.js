//importando classes
import Cliente from "./classe-cliente.js"
import ClientePoupanca from "./classe-cliente-poupanca.js"
import ClienteInvest from "./classe-cliente-invest.js"

// instanciando objetos e imprimindo
const novoCliente = new Cliente('Pedro', 'pedro@email.com', '78935744822', 250);
const novoClientePoupanca = new ClientePoupanca('Julia', 'julia@email.com', '85462533388', 100, 300);
console.log(novoCliente);
console.log(novoClientePoupanca);


novoCliente.nome = "Guilherme"; //alterando valor do atributo do objeto
console.log(novoCliente.nome);

novoClientePoupanca.#nome = 'Maria'; // tentando alterar o valor de um atributo privado
