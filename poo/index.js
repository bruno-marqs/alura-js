//importando classes
import Cliente from "./classe-cliente.js"
import ClientePoupanca from "./classe-cliente-poupanca.js"
import ClienteInvest from "./classe-cliente-invest.js"

// instanciando objetos
const novoCliente = new Cliente('Pedro', 'pedro@email.com', '78935744822', 250);
console.log(novoCliente)

novoCliente.nome = "Guilherme" //alterando valor do atributo do objeto
console.log(novoCliente.nome)