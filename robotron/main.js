// iniciando variáveis
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

// percorrendo array controle-ajuste
controle.forEach( (elemento) => {
    // 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

// criando função manipular dados
function manipulaDados(operacao) {
    if (operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
