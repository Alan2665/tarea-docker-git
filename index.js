const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>¡Hola mundo desde Docker y Git! - Tarea ITQ</h1>');
});

server.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});