const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
};
module.exports = getEmployeeByName;
