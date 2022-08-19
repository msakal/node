import express from "express";

const app = express();

// configurar a view engine com EJS
app.set('view engine', 'ejs');


// configurando rotas
app.get('/', (reg, res) => {
//   res.send('Uma resposta simpática');
    const bandas = ["CBJ", "Titãs", "BV"];
    res.render('paginas/index', {bandas});
});
app.get('/sobre', (reg, res) => {
    res.render('paginas/sobre');
});
app.get('/contato', (reg, res) => {
    res.render('paginas/contato');
});


// Executando o servidor
app.listen(8080, () => {
    console.log('Servidor express rodando ..');
});


// preparar para receber arquivos HTML

// instalação do 'ejs' - npm install ejs