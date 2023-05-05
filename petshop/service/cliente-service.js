
// função fazendo conexão com API e requisitando dados 
const listaClientes = () => {
    // executando fetch
    return fetch(`http://localhost:3000/profile`).then(
        resposta => {
            // retornando dados formatados em json
            return resposta.json()
        }
    )
}

// função para inserir dados
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        // opções da requisição
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome,
            email
        })
    })
    .then( resposta => { return resposta.body })
}

// criando objeto para notação
export const clienteService = {
    listaClientes, 
    criaCliente
}