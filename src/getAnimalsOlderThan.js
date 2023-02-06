const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const nameAnimal = data.species.find((specie) => specie.name === animal);
  const ageAnimal = nameAnimal.residents.every((ageAni) => ageAni.age >= age);
  return ageAnimal;
};
module.exports = getAnimalsOlderThan;
