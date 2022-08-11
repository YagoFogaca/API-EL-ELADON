const mongoose = require('mongoose');

const connectToDataBase = () => {
  mongoose
    .connect('mongodb://localhost:27017/paletas-BD', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((Err) => console.log(`Erro ao conectar com o MongoDb, erro: ${Err}`));
};

module.exports = connectToDataBase;
