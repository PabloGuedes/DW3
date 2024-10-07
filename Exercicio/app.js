const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

const PORT = 40000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});