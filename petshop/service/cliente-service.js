// criando função com template para cada linha de cliente
const criaNovaLinha = (nome, email) => {
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
}

// ------------------------------------------------

//criando objeto de conexão
const http = new XMLHttpRequest()

// abrindo a conexão (verbo http, destinatário conexão)
http.open('GET', 'http://localhost:3000/profile')

// enviando conexão 
http.send()

http.onload = () => {
    const data = http.response
    console.log(data)
}