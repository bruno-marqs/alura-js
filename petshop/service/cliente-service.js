
// função fazendo conexão com API e requisitando dados 
const listaClientes = () => {
    // executando fetch
    return fetch(`http://localhost:3000/profile`).then(
        resposta => {
            if(resposta.ok){
                // retornando dados formatados em json
                return resposta.json()
            }
            throw new Error('Não foi possível listar os clientes')
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
    .then( resposta => { 
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar novo cliente')
    })
}

// função para deletar dados
const removeCliente = (id) => {
    // selecionando id na requisição
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then( resposta => { 
        if(!resposta.ok){
            throw new Error('Não foi possível remover cliente')
        }
        return resposta.body
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json() 
        }
        throw new Error('Não foi possível detalhar o cliente')
    })
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
    .then( resposta => {
        if(resposta.ok){
            return resposta.json() 
        }
        throw new Error('Não foi possível atualizar o cliente')
    })
}

// criando objeto para notação
export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}