// criando função com template para cada linha de cliente
const criaNovaLinha = (nome, email) => {
    // criando linha para cada cliente
    const linhaNovaCliente = document.createElement('tr')
    // atribuindo à variável o template string
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`
    // atribuindo ao elemento html o template
    linhaNovaCliente.innerHTML = conteudo
    
    return linhaNovaCliente
}

// ------------------------------------------------

// selecionando elemento por data-attribute
const tabela = document.querySelector('[data-tabela]')

// ------------------------------------------------

//criando objeto de conexão
const http = new XMLHttpRequest()

// abrindo a conexão (verbo http, destinatário conexão)
http.open('GET', 'http://localhost:3000/profile')

// enviando dados 
http.send()

http.onload = () => {
    // variavel com valores formatados em json
    const data = JSON.parse(http.response)
    console.log(data)
    // percorrendo vetor data
    data.forEach(elemento => {
        // anexando elemento-filho (child) no elemento-pai (parent)
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
}