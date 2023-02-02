const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const managersId = isManager(managerId);
  if (managersId === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((employee) => employee.managers
    .some((value) => value === managerId))
    .map((names) => `${names.firstName} ${names.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
