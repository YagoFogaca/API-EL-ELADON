class Animal {
  static nome;
  static especie;
  static patas;
  static velocidade;
  static rabo;

  constructor(propriedades) {
    this.nome = propriedades.nome;
    this.especie = propriedades.especie;
    this.patas = propriedades.patas;
    this.velocidade = propriedades.velocidade;
    this.rabo = propriedades.rabo;
  }

  getAnimal() {
    const animal = this;
    return animal;
  }
}

const teste = {
  validate(name) {
    if (name === '') {
      console.log('nome não');
      return false;
    }
    console.log('Valido');
    return true;
  },

  validate1(name) {
    if (name === '') {
      console.log('nome não');
    }
    console.log('Valido');
  },
};

const liao = new Animal({
  nome: 'Alex',
  especie: 'leão',
  patas: 4,
  velocidade: 'Rapido',
  rabo: true,
});

const { validate } = teste;

validate(liao.name);
