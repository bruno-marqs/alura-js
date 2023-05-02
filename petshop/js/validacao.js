// criando objeto
const validadores =  {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validaCPF(input)
}

// craindo função genérica para reter o input
export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    
    // estilizando tratamento de erro
    if(input.validity.valid) {
        // alterando a classe css
        input.parentElement.classList.remove('input-container--invalido');
        // selecionando e inserindo mensagem de erro
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        // alterando a classe css
        input.parentElement.classList.add('input-container--invalido')
        // selecionando e inserindo mensagem de erro
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}

// criando vetor de string dos tipos de erro
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatc',
    'customError'
]

// criando objeto de erro
const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email inserido não é válido.'
    },
    senha : {
        valueMissing: 'O campo senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6-12 caracteres, deve conter pelo menos uma letra maiúscula e um número e não deve conter símbolos'
    },
    dataNascimento: {
        valueMissing: 'O campo data de nascimento não pode estar vazio.',
        customError: 'Você precisa ser maior que 18 anos para se cadastrar.'
    },
    cpf: {
        valueMissing: 'O campo CPF não pode estar vazio.',
        customError: 'O CPF inserido não é válido'
    }
}

function mostraMensagemDeErro (tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
}

// criando função para validar idade mínima
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = '';

    // condicionando a validação  ps: atenção a ! antes da função
    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você precisa ser maior que 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18 (data) {
    // capturando data atual
    const dataAtual = new Date();
    // somando data apresentado e somando 18 anos 
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMounth(), data.getUTCDate());

    return dataMais18 <= dataAtual
}

//criando função para validar CPF
function validaCPF(input) {
                                        // regex que substitui o que não é digito por vazio 
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';

    if(!verificaCPFRepetido(cpfFormatado)) {
        mensagem = 'O CPF não é válido'
    }

    input.setCustomValidity(mensagem)
}

function verificaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
    let cpfValido = true;

    valoresRepetidos.forEach (valor => {
        if(valor == cpf){
            cpfValido = false
        }
    });

    return cpfValido
}