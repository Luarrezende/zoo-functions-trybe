const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[`${specie.name}`] = specie.residents.length;
    });
    return animals;
  }
  const info = data.species.find((specie) => specie.name === animal.species);
  const sexo = info.residents.filter((sex) => sex.sex === animal.sex);
  if (!animal.sex) {
    return info.residents.length;
  }
  return sexo.length;
};

// console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
