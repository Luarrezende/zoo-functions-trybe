const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[`${specie.name}`] = specie.residents.length;
    });
    return animals;
  }
  const nameSpecie = data.species.find((specie) => specie.name === animal.species);
  const sexo = nameSpecie.residents.filter((sex) => sex.sex === animal.sex);
  if (!animal.sex) {
    return nameSpecie.residents.length;
  }
  return sexo.length;
};

// console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
