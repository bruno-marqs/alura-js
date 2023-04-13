
console.log("Num lista de chamada, remova os alunos ANA e CAIO que saíram e adicione RODRIGO no lugar");

// iniciando array 
const listaDeChamada = ['Ana', 'Caio', 'Lara', 'Isabela', 'Leo'];
console.log("A lista inicial: " + listaDeChamada);

// alterando a lista de chamada com método splice(onde começa, quantos remove, o que insere)
listaDeChamada.splice(0, 2, 'Rodrigo');

// conferindo a alteranção
console.log("A nova lista é: " + listaDeChamada);