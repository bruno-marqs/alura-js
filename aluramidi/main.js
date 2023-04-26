// criando função
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

// criando lista das teclas
const listaTeclas = document.querySelectorAll('.tecla');

// criando laço de repetição
let contador = 0;
while(contador < listaTeclas.length){
    listaTeclas[0].onclick = tocaSomPom;
    contador ++;
}