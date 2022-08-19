import fetch from 'node-fetch';

// const url = `https://jsonplaceholder.typicode.com/posts`;
const url = `https://viacep.com.br/ws/03721150/json`;

// Conectando com o endpoint da API (url)
fetch(url)
    // retornar a resposta como JSON
    .then(resposta => resposta.json())

    // exibir a resposta (obtida na API) no console
    .then(dados => console.log(dados));

// fetch(url).then(resposta => resposta.json()).then(dados => console.log(dados));