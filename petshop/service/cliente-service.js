//criando objeto de conexão
const http = new XMLHttpRequest()

// abrindo a conexão (verbo http, destinatário conexão)
http.open('GET', 'http://localhost:3000/profile')

// enviando conexão 
http.send()

http.onload = () => {
    const data = http.response
    console.log(data)
}