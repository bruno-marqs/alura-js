// iniciando variável
const controle = document.querySelectorAll("[data-controle]"); //data attribute

// percorrendo array controle-ajuste
controle.forEach( (elemento) => {
    // 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
});

// criando função manipular dados
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    };
};
