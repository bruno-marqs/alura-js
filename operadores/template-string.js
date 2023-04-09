
// concatenando string
const nome = "Bruno";
const idade = 2023 - 1990;
const cidadeNascimento = "Feira de Santana";

const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e nasci em " + cidadeNascimento;

console.log(apresentacao);

// usando a template string (template literal)

const quemSou = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeNascimento}.`
console.log(quemSou);
