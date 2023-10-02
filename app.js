const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "hospital",
});

conn.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa como id ' + conn.threadId);
});

app.post('/login', (req, res) => {
  const { correo, contraseña } = req.body;
  const query = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
  conn.query(query, [correo, contraseña], (error, results) => {
    if (error) {
      res.json({ success: false, message: 'Error al consultar la base de datos' });
    } else if (results.length > 0) {
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.json({ success: false, message: 'Correo o contraseña incorrectos' });
    }
  });
});

app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña, rol } = req.body;
    const query = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?, ?)';
    conn.query(query, [nombre, correo, contraseña, rol], (error, results) => {
        if (error) {
            res.json({ success: false, message: 'Error al registrar el usuario' });
        } else {
            res.json({ success: true, message: 'Registro exitoso' });
        }
    });
});


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

