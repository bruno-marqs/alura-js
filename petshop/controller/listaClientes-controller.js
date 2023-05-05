import { clienteService } from "../service/cliente-service.js"

// criando função com template para cada linha de cliente
const criaNovaLinha = (nome, email, id) => {
    // criando linha para cada cliente
    const linhaNovaCliente = document.createElement('tr')
    // atribuindo à variável o template string
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`
    // atribuindo ao elemento html o template
    linhaNovaCliente.innerHTML = conteudo
    linhaNovaCliente.dataset.id = id
    
    return linhaNovaCliente
}

// ------------------------------------------------

// percorrendo árvore do DOM e selecionando elemento por data-attribute
const tabela = document.querySelector('[data-tabela]')

// criando eventListener
tabela.addEventListener('click', async (evento) => {
    // selecionando botao excluir pela class que ocorreu evento
    let botaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir';
    
    if(botaoDeletar){
        // selecionando elemento-pai mais próximo
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        await clienteService.removeCliente(id)
        linhaCliente.remove();
    }
})

// ------------------------------------------------

const render = async () => {
    // executando função e manipulando dados
    const listaClientes = await clienteService.listaClientes()
        // percorrendo vetor data
        listaClientes.forEach(elemento => {
            // anexando elemento-filho (child) no elemento-pai (parent)
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    }

render()