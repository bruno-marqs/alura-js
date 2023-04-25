// criando array de objeto
const clientes = [
    {
        nome: 'andré',
        cpf: '45678965422',
        email: 'andre@email.com',
        dependente: 
        [
            { nome: 'Clara', parentesco: 'filha', dataNasc: '20/03/2024' },
            { nome: 'Pedro', parentesco: 'filho', dataNasc: '03/08/2023' }
        ]
    },
    {
        nome: 'julia',
        cpf: '96375314785',
        email: 'julia@email.com',
        dependente:[{ 
            nome: 'João', 
            parentesco: 'filho', 
            dataNasc: '20/08/2024' 
        }]
    }
]

// criando array de dependentes
const listaDependentes = [...clientes[0].dependente, ...clientes[1].dependente];

// conferindo array de dependentes
console.log(listaDependentes);