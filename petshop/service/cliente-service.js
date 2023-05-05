
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

// função para deletar dados
const removeCliente = (id) => {
    // selecionando id na requisição
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => { return resposta.json() })
}

const atualizaCliente = (nome, email, id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => { return resposta.json() })
}

// criando objeto para notação
export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}