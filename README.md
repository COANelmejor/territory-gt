# territory-gt

Departamentos y Municipios de Guatemala para programadores.

> Los datos están actualizados hasta el **14 de diciembre de 2019.**

## Índice

* [Instalación](##Instalación)
* [Documentación](##Documentación)
  * [Uso](###Uso)
  * [Departamentos](###Departamentos)
  * [Cabeceras Departamentales](###Cabeceras_Departamentales)
  * [Municipios](###Municipios)

## Instalación

`npm install territory-gt`

## Documentación

### Uso

Importa el módulo usando el siguiente código:

```Javascript
const GT = require('territory-gt')
```

---

### Departamentos

Para obtener los departamentos usa el método `departamentos`.

```Javascript
GT.departamentos();
```

Lo cual retornará los un `String[]` con los departamentos de Guatemala.

```Javascript
[
  'Alta Verapaz',   'Baja Verapaz',
  'Chimaltenango',  'Chiquimula',
  'El Progreso',    'Escuintla',
  'Guatemala',      'Huehuetenango',
  'Izabal',         'Jalapa',
  'Jutiapa',        'Petén',
  'Quetzaltenango', 'Quiché',
  'Retalhuleu',     'Sacatepéquez',
  'San Marcos',     'Santa Rosa',
  'Sololá',         'Suchitepéquez',
  'Totonicapán',    'Zacapa'
]
```

---

### Cabeceras_Departamentales

Para obtener los departamentos usa el método `cabecera`.

Funciona con un parámetro, que debe ser un String con el nombre del departamento de Guatemala o 
devolverá `undefined`

**Ejemplos:**

```Javascript
GT.cabecera('Guatemala')
// 'Guatemala'

GT.cabecera('Suchitepéquez');
// 'Mazatenango'

GT.cabecera('Izabal')
// 'Puerto Barrios'

GT.cabecera('Texas')
// undefined
```

También puedes poner el nombre del departamento con o sin diacríticos, con o sin mayúsculas, con o
sin espacios:

```Javascript
GT.cabecera('Suchitepéquez');
// 'Mazatenango'

GT.cabecera('suchitepequez')
// 'Mazatenango'

GT.cabecera('SuchiTePequeZ')
// 'Mazatenango'
```

Debes escribir el nombre completo del departamento, tal como se recibe en el metodo 
[Departamentos](###Departamentos) sino recibirás un `undefined`.

```Javascript
GT.cabecera('Petén');
// 'Flores'

GT.cabecera('El Petén')
// undefined

```

### Municipios

Para obtener los municipios de un departamento usa el método `municipios`.

Funciona con parámetro, que debe ser un String con el nombre del departamento.

El primer String será la cabecera departamental.

```Javascript
GT.municipios('Guatemala')}
// [
//   'Guatemala',
//   'Amatitlán',
//   'Chinautla',
//   'Chuarrancho',
//   'Fraijanes',
//   'Mixco',
//   'Palencia',
//   'San José del Golfo',
//   'San José Pinula',
//   'San Juan Sacatepequez',
//   'San Miguel Petapa',
//   'San Pedro Ayampuc',
//   'San Pedro Sacatepequez',
//   'San Raymundo',
//   'Santa Catarina Pinula',
//   'Villa Canales',
//   'Villa Nueva'
// ]

GT.municipios('Texas')
// undefined
```

También puede no llevar el parámetro departamentos, lo que devolverá un Objeto con todos los
departamentos como parámetros. Cadá parámetro tendrá un `String[]` con los municipios.

```Javascript
GT.municipios()
// {
//   'Alta Verapaz': [
//     'Cobán',
//     'Chahal',
//     ...,
//     'Tamahú'
//  ],
//  ...,
//  Zacapa: [
//    'Zacapa',
//    'Cabañas',
//     ...,
//    'Usumatlán'
//  ]
// }
```

**Ejemplos:**

```Javascript
GT.municipios('Guatemala')
// 'Guatemala'

GT.municipios('Suchitepéquez');
// 'Mazatenango'

GT.municipios('Izabal')
// 'Puerto Barrios'
```

También puedes poner el nombre del departamento con o sin diacríticos, con o sin mayúsculas, con o sin espacios:

```Javascript

GT.municipios('suchitepequez')
// [
//   'Mazatenango',
//   'Chicacao',
//   ...,
//   'Zunilito'
// ]
GT.municipios('bajaVerapaz')
// [
//   'Salamá',
//   'Cubulco',
//   ...,
//   'Santa Cruz El Chol'
// ]


```

Debes escribir el nombre completo del departamento, tal como se recibe en el metodo [Departamentos](###Departamentos) sino recibirás un `undefined`.

```Javascript
GT.municipios('Petén');
// [
//   'Flores',
//   'Dolores',
//   ...,
//   'Sayaxche'
// ]

GT.municipios('El Petén')
// undefined
```
