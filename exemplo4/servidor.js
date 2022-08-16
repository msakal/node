// importando módulo http NATIVO do node (existe a partir da instalação do node na máquina). Pegar as requisições de URL
import http from 'http';

// JS assíncrono (operações independentes, ocorrem em paralelo) .FS = File System
import fs from 'fs/promises';

// arrow function  => { }
const monitorRequisicao = (requisicao, resposta) => {

    resposta.writeHead( 200, {"content-type": "text/html; charset=utf8"} );

    switch(requisicao.url) {
        case '/': 
            fs.readFile("paginas/index.html").then( conteudo => resposta.end(conteudo) );
        break;

        case '/sobre':
            fs.readFile("paginas/sobre.html").then( conteudo => resposta.end(conteudo) );
        break;

        default:
            resposta.writeHead(404);
            fs.readFile("paginas/404.html").then( conteudo => resposta.end(conteudo) );
        break;
    }

}


// Criando um servidor baseado no módulo http que importamos e monitorando ele.
const servidor = http.createServer(monitorRequisicao);

// Iniciando o servidor
servidor.listen( 8080, () => { console.log('Servidor rodando ..'); } );

// ******** PARA TESTAR, PRECISAR EXECUTAR O SERVIDOR NA LINHA DE COMANDO ...  ('caminho'>node servidor.js) ,,, no browser (localhost:8080)