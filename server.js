const express = require('express');
const path = require('path');
const app = express()
const port = 4000;

// Configurar o EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, JS, IMAGENS).
app.use(express.static(path.join(__dirname, 'public')));


// Rota para página inicial
app.get('/', (req, res) => {
    res.render('index', { title: 'Mercado Smart' });
})

// Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor rodando em http:localhost:${port}');
});

