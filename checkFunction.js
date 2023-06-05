function validateGrade(grade) {
  // eslint-disable-next-line no-restricted-globals
  if ((!grade && grade !== 0) || isNaN(grade) || grade < 0 || grade > 100) {
    return false;
  }
  return true;
}

function validateName(name) {
  if (name.indexOf(' ') === -1 || (name.match(/^[A-Za-z]+$/))) {
    return false;
  }
  return true;
}

module.exports = {
  validateGrade,
  validateName,
};
