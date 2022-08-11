const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();

  res.send(paletas);
};

function findByIdPaletasController(req, res) {
  const paramsId = Number(req.params.id);

  if (!paramsId) {
    res.status(404).send({ message: 'Id não foi informado!' });
    return;
  }

  const paleta = paletasService.findByIdPaletasService(paramsId);

  res.send(paleta);
}

function postController(req, res) {
  const paleta = req.body;

  if (!paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    res.status(404).send({ message: 'Paleta não foi criada!', motivo: 'Algum dado não foi passado!' });
    return;
  }

  const novaPaleta = paletasService.postService(paleta);

  res.status(200).send(novaPaleta);
}

function putController(req, res) {
  const paramsId = Number(req.params.id);

  if (!paramsId) {
    res.status(404).send({ message: 'Id não foi informado!' });
    return;
  }

  const paleta = req.body;

  if (!paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    res.status(404).send({ message: 'A Paleta não foi alterada!', motivo: 'Algum dado não foi passado!' });
    return;
  }

  const paletaNova = paletasService.putService(paramsId, paleta);

  res.send(paletaNova);
}

function deleteController(req, res) {
  const paramsId = Number(req.params.id);

  if (!paramsId) {
    res.status(404).send({ message: 'Id não foi informado!' });
    return;
  }

  const paletaNova = paletasService.deleteService(paramsId);

  res.send(paletaNova);
}

module.exports = {
  findAllPaletasController,
  findByIdPaletasController,
  postController,
  putController,
  deleteController,
};
