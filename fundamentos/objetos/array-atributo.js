// objeto com atributo em array
const cliente = {
    nome: "andré",
    idade: 36,
    cpf:"45678965422",
    email:"andre@email.com",
    fones: ["557599886644", "557199664477"] // lista de telefone
};

// imprimindo lista usando forEach
cliente.fones.forEach(fone => console.log(fone));
