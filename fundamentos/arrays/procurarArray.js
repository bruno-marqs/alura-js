
console.log("Crie uma função para pesquisar o nome de um aluno e retorne a média respectiva")

//  inicializando arrays
const alunos = ['Ana', 'Caio', 'João', 'Isabela'];
const medias = [10, 7, 9, 6];
let listaDeMediasEAlunos = [alunos, medias];

// criando função para pesquisar com metodo includes()
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeMediasEAlunos[0].includes(nomeDoAluno)) {
        index = listaDeMediasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeMediasEAlunos[0][index] + ', sua média é ' + listaDeMediasEAlunos[1][index]
    } else {
        return 'Aluno não encontrado'
    }
}

console.log(exibeNomeNota("Isabela"));