// criando função
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

// criando lista das teclas
const listaTeclas = document.querySelectorAll('.tecla');

// criando laço de repetição
let contador = 0;
while(contador < listaTeclas.length){
    listaTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    };
    contador ++;
}