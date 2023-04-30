const repDep = require('./stringDep');
const data = require('./data');

/**
 * Retorna los departamentos de Guatemala.
 */
function departamentos (){
  return data.departamentos;
}

/**
 * Retorna los Municipios de un Departamento.
 * 
 * @param {String} departamento 
 */
function municipios(departamento){
  if (departamento == null) {
    return data.municipiosObj;
  } else {
    const ldep = repDep(departamento);
    return data.municipios[ldep];
  }
}
/**
 * Retorna los el número de habitantes de un Departamento.
 * 
 * @param {String} departamento 
 */
function poblacion(departamento){
  if (departamento == null) {
    return data.poblacionDeptoObj;
  } else {
    const ldep = repDep(departamento);
    return data.poblacionDepto[ldep];
  }
}

/**
 * Retorna la Cabercera Departamental de un Departamento
 * 
 * @param {String} departamento 
 */
function cabecera (departamento){
  const ldep = repDep(departamento);
  if (data.municipios[ldep] == null){
    return undefined
  } else {
    return data.municipios[ldep][0];
  }
}

/**
 * Retorna todos las constantes de data como un objetos.
 */
function datapura() {
  return data
}

module.exports = {
  departamentos,
  municipios,
  poblacion,
  cabecera,
  datapura,
}

