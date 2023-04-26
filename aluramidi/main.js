// criando função
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

// criando lista das teclas
const listaTeclas = document.querySelectorAll('.tecla');

// criando laço de repetição
for (let i = 0; i < listaTeclas.length; i++) {

    // iniciando variaveis
    const tecla = listaTeclas[contador];
    const som = tecla.classList[1];

    tecla.onclick = function() {
        tocaSom(`#som_${som}`);
    };
    
}