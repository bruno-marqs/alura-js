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

// selecionando elemento por id
const cep = document.getElementById('cep');
// criando event no input para alimentar parametro da função
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

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
        // inicializando variável pelo id
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');

        // atribuindo valor da requisição à variável
        cidade.value = requisiçãoFormatado.localidade;
        logradouro.value = requisiçãoFormatado.logradouro;
        estado.value = requisiçãoFormatado.uf;


        // imprimindo resultado da requisição
        console.log(requisiçãoFormatado)
        return requisiçãoFormatado
    } catch (erro) {
        console.log(erro)
    }
}

//executando função
buscaEndereco();