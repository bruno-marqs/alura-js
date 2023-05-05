import { clienteService } from "../service/cliente-service.js"

// função anônima
( async () => {
    // capturando url do cliente selecionado
    const pegaUrl = new URL(window.location)
    
    // atribuindo variavel valor do id da URL
    const id = pegaUrl.searchParams.get('id')
    
    // percorre árvore DOM e atribui a variavel
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    
    // executa função e atribui dados encontrados por id às variáveis
    const dados = await clienteService.detalhaCliente(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})
//executa função anônima
()

// ----------------------------------------------------------------

// percorrer árvore DOM e selecionando data-attribute
const formulario = document.querySelector('[data-form]');

// criando eventListener
formulario.addEventListener('submit', async (evento) => {
    // prevenindo comportanto padrão de enviar sem checar os valores
    evento.preventDefault()
    // executa função inserindo novos dados
    await clienteService.atualizaCliente(inputNome.value, inputEmail.value, id)
    // redirecionando
    window.location.href = "../telas/edicao_concluida.html"
})