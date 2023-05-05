import { clienteService } from "../service/cliente-service.js"

// capturando url do cliente selecionado
const pegaUrl = new URL(window.location)

// atribuindo variavel valor do id da URL
const id = pegaUrl.searchParams.get('id')

// ---------------------------------------------------------------

// percorre árvore DOM e atribui a variavel
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

// executa função e atribui dados encontrados por id às variáveis
clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})