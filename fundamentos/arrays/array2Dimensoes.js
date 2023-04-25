
console.log("Faça um array com 2 dimensões a partir de 2 arrays");

// inicializando arrays
const alunos = ['Ana', 'Caio', 'João', 'Isabela'];
const medias = [10, 7, 9, 6];

console.log("Os alunos são: " + alunos);
console.log("As médias são: " + medias + "\n");


// criando array de duas dimensões com método
let listaDeMediasEAlunos = [alunos, medias];
console.log("Os Alunos e suas Médias, respectivas: " + listaDeMediasEAlunos + "\n");

// imprimindo o primeiro aluno e sua nota
console.log(`A média da aluna ${listaDeMediasEAlunos[0][0]} é igual a ${listaDeMediasEAlunos[1][0]}`);

