import { valida } from './validacao.js';

// reune em vetor todos elementos do tipo input
const inputs = document.querySelectorAll('input');

// percorre vetor
inputs.forEach(input => {
    // condicional para formatar tipo de input monetário
    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
    
    // executa função valida() em um elemento toda vez que ocorre o evento 'blur'
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})