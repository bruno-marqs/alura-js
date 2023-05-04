
// função fazendo conexão com API e requisitando dados 
export const listaClientes = () => {
    // executando fetch
    return fetch(`http://localhost:3000/profile`).then(
        resposta => {
            // retornando dados formatados em json
            return resposta.json()
        }
    )
}

