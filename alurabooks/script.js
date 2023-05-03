// atribuindo a variável API viaCEP
const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    // formatando requisição em json (Javascript Object Notation)
    .then(response => response.json())
    .then(data => {
        // condicional para tratar erro
        if(data.erro) {
            throw Error('Esse CEP não é válido')
        } else {
            console.log(data)
        }
    })
    .catch(erro => console.lot(erro))
    .finally(mensagem => console.log('Processamento concluído'))

// imprimindo resultado da requisição
console.log(consultaCEP)

// ------------------------------------------------------------------

// criando função assincrona
async function buscaEndereco(cep) {
    try {
        // atribuindo a variável API viaCEP
        const requisição = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const requisiçãoFormatado = await requisição.json();

        // condicional para tratar erro
        if(requisiçãoFormatado.erro) {
            throw Error('Esse CEP não é válido')
        }

        // imprimindo resultado da requisição
        console.log(requisiçãoFormatado)
        return requisiçãoFormatado
    } catch (erro) {
        console.log(erro)
    }
}

//executando função
buscaEndereco();