const rm = require('./removeDiacritics');

/**
 * Esta función permite quitar los dacríticos y espacios del string enviado.
 * 
 * Este debe tener el nombre de un departamento.
 * 
 * @param {String} str 
 * 
 */
function repDepartamento(str) {
  return String(rm(str).split(" ").join("").toLowerCase());
}

module.exports = repDepartamento;