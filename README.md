# territory-gt

Departamentos y Municipios de Guatemala para programadores.

> Los datos están actualizados hasta el **14 de diciembre de 2019.**

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


### Población

Para obtener la población de un departamento usa el método `poblacion`.

Funciona con parámetro, que debe ser un String con el nombre del departamento.

El primer String será la cabecera departamental.

```Javascript
GT.poblacion('Guatemala')
//  3015081

GT.poblacion('Texas')
// undefined
```

También puede no llevar el parámetro departamentos, lo que devolverá un Objeto con todos los
departamentos como parámetros. Cadá parámetro tendrá un `Integer` con el número de habitantes de cada departamento.

```Javascript
GT.poblacion()
// {
//   'Alta Verapaz': 1215038,
//   'Baja Verapaz': 299476,
//   "Quetzaltenango": 799101,
//   'Quiché': 949261,
//   "Retalhuleu": 326828,
//   'Sacatepéquez': 330469,
//   'San Marcos': 1032277,
//   'Santa Rosa': 396607,
//   'Sololá': 421583,
//   'Suchitepéquez': 554695,
//   'Totonicapán': 418569,
//   "Zacapa": 245374
// }
```

**Ejemplos:**

```Javascript
GT.poblacion('Guatemala')
// 3015081

GT.poblacion('Suchitepéquez');
// 554695

GT.poblacion('Izabal')
// 408688
```

También puedes poner el nombre del departamento con o sin diacríticos, con o sin mayúsculas, con o sin espacios:

```Javascript

GT.poblacion('suchitepequez')
// 408688

GT.poblacion('bajaVerapaz')
// 299476

```

Debes escribir el nombre completo del departamento, tal como se recibe en el metodo [Departamentos](###Departamentos) sino recibirás un `undefined`.

```Javascript
GT.poblacion('Petén');
// 545600

GT.poblacion('El Petén')
// undefined
```

### Data Pura

Con este método obtendrás todos los datos de los objetos utilizados para obtener los datos.

Puedes obtener 5 datos diferntes:

* `departamentos`
* `municipios`
* `municipiosObj`
* `poblacionDepto`
* `poblacionDeptoObj`

```js
const datapura = GT.datapura()

datapura.municipios

// {
//   altaverapaz: [
//     'Cobán',
//     'Chahal',
//     'Chisec',
//     'Fray Bartolomé de las Casas',
//     'Lanquín',
//     'Panzos',
//     'San Cristobal Verapaz',
//     'San Miguel Tucurú',
//     'San Pedro Carchá',
//     'SanJuan Chamelco',
//     'Santa Catarina La Tinta',
//     'Santa Cruz Verapaz',
//     'Santa María Cahabón',
//     'Senahú',
//     'Tactíc',
//     'Tamahú'
//   ], [...] ,
//   zacapa: [
//     'Zacapa',     'Cabañas',
//     'Estanzuela', 'Gualán',
//     'Huité',      'La Unión',
//     'Río Hondo',  'San Diego',
//     'Teculután',  'Usumatlán'
//   ]
// }

```


```js
const datapura = GT.datapura()

datapura.poblacionDepto

// {
//   altaverapaz: 1215038,
//   bajaverapaz: 299476,
//   chimaltenango: 615776,
//   chiquimula: 415063,
//   elprogreso: 176632,
//   escuintla: 733181,
//   guatemala: 3015081,
//   huehuetenango: 1170669,
//   izabal: 408688,
//   jalapa: 342923,
//   jutiapa: 488395,
//   peten: 545600,
//   quetzaltenango: 799101,
//   quiche: 949261,
//   retalhuleu: 326828,
//   sacatepequez: 330469,
//   sanmarcos: 1032277,
//   santarosa: 396607,
//   solola: 421583,
//   suchitepequez: 554695,
//   totonicapan: 418569,
//   zacapa: 245374
// }

datapura.poblacionDeptoObj
// {
//   'Alta Verapaz': 1215038,
//   'Baja Verapaz': 299476,
//   'Chimaltenango': 615776,
//   'Chiquimula': 415063,
//   'El Progreso': 176632,
//   'Escuintla': 733181,
//   'Guatemala': 3015081,
//   'Huehuetenango': 1170669,
//   'Izabal': 408688,
//   'Jalapa': 342923,
//   'Jutiapa': 488395,
//   'Petén': 545600,
//   'Quetzaltenango': 799101,
//   'Quiché': 949261,
//   'Retalhuleu': 326828,
//   'Sacatepéquez': 330469,
//   'San Marcos': 1032277,
//   'Santa Rosa': 396607,
//   'Sololá': 421583,
//   'Suchitepéquez': 554695,
//   'Totonicapán': 418569,
//   'Zacapa': 245374
// }

```
_______________________
#### Referencia de datos actualizados:

Principales Resultados del Censo 2018. (2023, 16 de abril). Censo poblacion y vivienda. Fecha de consulta: abril 28, 2023 desde [https://www.censopoblacion.gt/archivos/Principales_resultados_Censo2018.pdf](https://www.censopoblacion.gt/archivos/Principales_resultados_Censo2018.pdf)