const paletas = require('../../mocks/paletas');

function findAllPaletasService() {
  return paletas;
}

function findByIdPaletasService(id) {
  const paleta = paletas.find((item) => item.id === id);

  if (paleta === undefined) {
    return { message: 'Paleta não incontrada!', tentar: 'Tente por outro ID' };
  }

  return paleta;
}

function postService(paleta) {
  const novoId = paletas.length + 1;

  paleta.id = novoId;

  paletas.push(paleta);

  return { message: 'Paleta Criada com sucesso', conferir: 'Confira na rota http://localhost:3000/paletas/all' };
}

function putService(paramsId, paleta) {
  // if(!paramsId)
  const indexPaleta = paletas.findIndex((item) => item.id === paramsId);

  paleta.id = paletas[indexPaleta].id;

  paletas[indexPaleta] = paleta;

  return paleta;
}

function deleteService(id) {
  const indexPaleta = paletas.findIndex((item) => item.id === id);

  paletas.splice(indexPaleta, 1);

  return { menssagem: 'Paleta deletada com sucesso!' };
}

module.exports = {
  findAllPaletasService,
  findByIdPaletasService,
  postService,
  putService,
  deleteService,
};
