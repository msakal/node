import express from "express";
const app = express();


// configurando o motor de visualização com EJS
app.set('view engine', 'ejs');


// configurando as rotas
app.get('/', (req, res) => {
    // res.send('Aplicação funcionando bem. ok!!!');
    let bandas = ['CBJ', 'CPM22', 'RPM'];
    res.render('index', {bandas});
});

    app.get('/sobre', (reg, res) => {
        res.render('sobre');
    });

    app.get('/contato', (reg, res) => {
        res.render('contato');
    });


// configurando o servidor
app.listen(8080, () => {
    console.log('Servidor Express rodando ..');
});
