import { clienteService } from "../service/cliente-service.js";


// percorrer árvore DOM e selecionando data-attribute
const formulario = document.querySelector('[data-form]');

// criando eventListener
formulario.addEventListener('submit', (evento) => {
    // prevenindo comportanto padrão de enviar sem checar os valores
    evento.preventDefault()
    // atribuindo à variavel valor do data-attribute
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    // executando função inserindo valores do evento
    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})