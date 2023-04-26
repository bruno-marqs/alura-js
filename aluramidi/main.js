// criando função
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

// criando lista das teclas
const listaTeclas = document.querySelectorAll('.tecla');

// criando laço de repetição
for (let i = 0; i < listaTeclas.length; i++) {

    // iniciando variaveis
    const tecla = listaTeclas[i];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`; 

    // criando função anônima para tocar som
    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    // criando funções anônimas para add / remover classe
    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}