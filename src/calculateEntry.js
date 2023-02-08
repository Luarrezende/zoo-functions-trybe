const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (entrants.length === undefined) {
    return 0;
  }
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
};
const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const numberGuys = Object.keys(countEntrants(entrants));
  const object = countEntrants(entrants);

  return Number(numberGuys
    .reduce((acc, entrant) => acc + (data.prices[entrant] * object[entrant]), 0)
    .toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
