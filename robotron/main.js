// iniciando variáveis
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// criando arrow function somar
somar.addEventListener("click", (evento) => {
    // transformando string em int 
    braco.value = parseInt(braco.value) + 1
})

// criando arrow function subtrair
somar.addEventListener("click", (evento) => {
    // transformando string em int 
    braco.value = parseInt(braco.value) - 1
})

