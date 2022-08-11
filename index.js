const express = require('express');

const cors = require('cors');

const routes = require('./src/routes/paleta.route.js');

const connectToDataBase = require('./src/dataBase/mongoDB/dataBase');

const app = express();

const port = 3000;

connectToDataBase();

app.use(cors());

app.use(express.json());

app.use('/paletas', routes);

app.use(express.json());

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);

  console.log(`Acesse em: http://localhost:${port}`);
});
