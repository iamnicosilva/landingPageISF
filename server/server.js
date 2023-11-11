const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const options = {
  cert: fs.readFileSync('../../../ssl/certs/test_isfat_org_c571f_68949_1704931199_85386d88f24f1b173e37c6cade19cb7b.crt'),
  key: fs.readFileSync('../../../ssl/keys/c571f_68949_1912375c6270496574d716cc0a3e6376.key')
};

console.log('cert: ')
console.log(options.cert)
console.log('key: ')
console.log(options.key)

const server = https.createServer(options, app);



// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USUARIO,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Configura una ruta para recibir datos del formulario
app.post('/api/registrar', (req, res) => {
  const { name, email } = req.body; // Datos del formulario

  // Realiza la inserción en la base de datos
  const sql = 'INSERT INTO usuarios (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err);
      res.status(500).json({ error: 'Error al insertar datos' });
    } else {
      console.log('Datos insertados con éxito');
      res.status(200).json({ message: 'Datos insertados con éxito' });
    }
  });
});

const port = process.env.PORT || 8443;
server.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
