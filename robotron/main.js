// iniciando variável
const controle = document.querySelectorAll(".controle-ajuste");

// percorrendo array controle-ajuste
controle.forEach( (elemento) => {
    // 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    })
});

// criando função manipular dados
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    };
};
