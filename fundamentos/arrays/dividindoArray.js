
console.log("Divida a array em duas de mesmo tamanho");

// array iniciado
const nomesTotal = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Isabela']; //lenght = 6
console.log("Array inicial: " + nomesTotal);

// dividindo array com o método slice
const array1 = nomes.slice(0, nomes.length/2); // vai do index 0 até a metade do array
const array2 = nomes.slice(nomes.length/2) // vai da metade até o final

// conferindo a alteração
console.log("O primeiro array recebeu os nomes: " + array1);
console.log("O segundo array recebeu os nomes: " + array2);