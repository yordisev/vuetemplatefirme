// primera columna solo permita texto y que tenga minimo 2 caracteres y maximo 10 ademas que no venga vacia
// segunda columna que valide la fecha
// tercera columna que valide numero de celular
// cuarta columna que valide el correo
// quinta columna que valide que sea un numero y que tenga un minimo de 3 caracteres y maximo de 15
// sexta columna valide el numerodedocumento con una consulta en una base de datos mysql que exista
// septima columna el texto empiece por CC
// octava columna solo permita una letra y que esta sea la letra A
// novena columna permita solo numeros y que estos no sean menores a 100 ni mayores a 300
// decima columna solo permita numeros que empiecen por 5 adicional que en ninguna de las columnas contegan espacios
const csv = require('csv-validator');
const fs = require('fs');

const validator = csv([
  {
    name: 'Column 1',
    required: true,
    validate: (value) => /^[a-zA-Z]{2,10}$/.test(value),
  },
  {
    name: 'Column 2',
    required: true,
    validate: (value) => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value),
  },
  {
    name: 'Column 3',
    required: true,
    validate: (value) => /^[0-9]{10}$/.test(value),
  },
  {
    name: 'Column 4',
    required: true,
    validate: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
  },
  {
    name: 'Column 5',
    required: true,
    validate: (value) => /^[0-9]{3,15}$/.test(value),
  },
  {
    name: 'Column 6',
    required: true,
    async validate(value) {
      // Aquí podrías realizar la consulta a la base de datos MySQL para verificar el número de documento
      const isValid = await verificarNumeroDeDocumentoEnBaseDeDatos(value);
      return isValid;
    },
  },
  {
    name: 'Column 7',
    required: true,
    validate: (value) => /^CC/.test(value),
  },
  {
    name: 'Column 8',
    required: true,
    validate: (value) => /^[A]$/.test(value),
  },
  {
    name: 'Column 9',
    required: true,
    validate: (value) => /^[0-9]+$/.test(value) && parseInt(value) >= 100 && parseInt(value) <= 300,
  },
  {
    name: 'Column 10',
    required: true,
    validate: (value) => /^5/.test(value),
  },
]);

fs.createReadStream('ruta/al/archivo.csv')
  .pipe(validator)
  .pipe(fs.createWriteStream('ruta/donde/guardar/resultados.csv'));

function verificarNumeroDeDocumentoEnBaseDeDatos(value) {
  // Aquí deberías implementar la lógica para consultar la base de datos y validar el número de documento
  // Retorna una promesa que resuelva a true si el número de documento existe, o false si no existe
  // Por simplicidad, aquí retornamos una promesa que siempre resuelve a true
  return Promise.resolve(true);
}
