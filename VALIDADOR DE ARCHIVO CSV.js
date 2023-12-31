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
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 1', message);
      },
  },
  {
    name: 'Column 2',
    required: true,
    validate: (value) => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 2', message);
      },
  },
  {
    name: 'Column 3',
    required: true,
    validate: (value) => /^[0-9]{10}$/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 3', message);
      },
  },
  {
    name: 'Column 4',
    required: true,
    validate: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 4', message);
      },
  },
  {
    name: 'Column 5',
    required: true,
    validate: (value) => /^[0-9]{3,15}$/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 5', message);
      },
  },
  {
    name: 'Column 6',
    required: true,
    async validate(value) {
      const isValid = await verificarNumeroDeDocumentoEnBaseDeDatos(value);
      if (!isValid) {
        return `Número de documento ${value} no válido o no existe en la base de datos`;
      }
      return true;
    },
    onError: (row, value, message) => {
      writeToResultFile(row, 'Column 6', message);
    },
  },
  {
    name: 'Column 7',
    required: true,
    validate: (value) => /^CC/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 7', message);
      },
  },
  {
    name: 'Column 8',
    required: true,
    validate: (value) => /^[A]$/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 8', message);
      },
  },
  {
    name: 'Column 9',
    required: true,
    validate: (value) => /^[0-9]+$/.test(value) && parseInt(value) >= 100 && parseInt(value) <= 300,
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 9', message);
      },
  },
  {
    name: 'Column 10',
    required: true,
    validate: (value) => /^5/.test(value),
    onError: (row, value, message) => {
        writeToResultFile(row, 'Column 10', message);
      },
  },
]);

const validRows = [];

fs.createReadStream('ruta/al/archivo.csv')
  .pipe(validator)
  .pipe(fs.createWriteStream('ruta/donde/guardar/resultados.csv'))
//   ------------------------------------------------------------------------
  .on('data', async (data) => {
    const isValid = await validateRow(data);
    if (isValid) {
      validRows.push(data);
    }
  })
  .on('end', () => {
    insertValidRowsIntoDatabase(validRows);
    connection.end();
  });

  async function validateRow(data) {
    // Realiza todas las validaciones para la fila
    for (const validator of validator.validators) {
      const isValid = await validator.validate(data[validator.name]);
      if (!isValid) {
        writeToResultFile(data.join(','), validator.name, 'Validation failed');
        return false;
      }
    }
    return true;
  }

  async function insertValidRowsIntoDatabase(rows) {
    // Realiza la inserción de los registros válidos en la base de datos
    const query = 'INSERT INTO tu_tabla (columna1, columna2, columna3, ...) VALUES (?, ?, ?)';
    for (const row of rows) {
      const values = row.slice(0, 3); // Ajusta esto según la estructura de tu archivo CSV
      connection.query(query, values, (error) => {
        if (error) {
          console.error('Error inserting row:', error);
        }
      });
    }
  }
//   ---------------------------------------------------------------------------
  function writeToResultFile(row, columnName, observation) {
    const resultLine = `${row},${columnName},${observation}\n`;
    fs.appendFileSync('ruta/donde/guardar/resultados.csv', resultLine);
  }

  async function verificarNumeroDeDocumentoEnBaseDeDatos(value) {
    // Conectarte a la base de datos y realizar la consulta para verificar el número de documento
    const connection = mysql.createConnection({
      host: 'tu_host',
      user: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
    });
  
    return new Promise((resolve) => {
      connection.query('SELECT COUNT(*) AS count FROM tu_tabla WHERE numero_documento = ?', [value], (error, results) => {
        if (error) {
          resolve(false); // En caso de error, consideramos como no válido
        } else {
          const count = results[0].count;
          resolve(count > 0); // Si count es mayor a 0, el número de documento existe en la base de datos
        }
        connection.end();
      });
    });
  }


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user
    next();
});

app.use(function(err, req, res, next) {
    res.render('error', {
        error : err
    })
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
});