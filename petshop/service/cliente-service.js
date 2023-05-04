
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

// criando objeto para notação
export const clienteService = {
    listaClientes
}