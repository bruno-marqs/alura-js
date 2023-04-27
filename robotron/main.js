// iniciando variáveis
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// criando arrow function somar
somar.addEventListener("click", () => {manipulaDados("somar")})

// criando arrow function subtrair
somar.addEventListener("click", (evento) => {manipulaDados("subtrair")})

// criando função manipular dados
function manipulaDados(operacao) {
    if (operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
