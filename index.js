const repDep = require('./stringDep');
const data = require('./data');

/**
 * Retorna los departamentos de Guatemala.
 */
function departamentos (){
  return data.departamentos;
}

/**
 * Devuelve los Municipios de un Departamento.
 * 
 * @param {String} departamento 
 */
function municipios(departamento){
  const ldep = repDep(departamento);
  return data.municipios[ldep];
}

/**
 * Devuleve la Cabercera Departamental de un Departamento
 * @param {String} departamento 
 */
function cabecera (departamento){
  const ldep = repDep(departamento);
  return data.municipios[ldep][0];
}

module.exports = {
  departamentos,
  municipios,
  cabecera
}

