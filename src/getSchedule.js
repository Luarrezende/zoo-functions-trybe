const data = require('../data/zoo_data');

const daysWeek = Object
  .keys(data.hours);

const zoo = () => {
  const element = daysWeek.reduce((acc, elemento) => {
    acc[elemento] = {
      officeHour: `Open from ${data.hours[elemento].open}am until ${data.hours[elemento].close}pm`,
      exhibition: data.species
        .filter((animal) => animal.availability
          .includes(elemento))
        .map((a) => a.name),
    };
    return acc;
  }, {});
  element.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return element;
};
const semP = undefined;

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === semP) {
    return zoo();
  }
  const verifica = data.species
    .some((cond) => scheduleTarget === cond.name);
  if (!verifica && !daysWeek.includes(scheduleTarget)) {
    return zoo();
  }
  if (daysWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: zoo()[scheduleTarget] };
  }
  return data.species
    .find((teste) => teste.name === scheduleTarget).availability;
};

module.exports = getSchedule;
