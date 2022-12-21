// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((request, response) => {
// response.statusCode = 200
// response.setHeader('Content-Type', 'text/plain')
// response.end('Hola Mundo')
// })

// server.listen(port, hostname, () => {
// console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
// })
/*Usando express */
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    let suma = Number(2) + Number(2);
    // res.send("Hol Jairo");
    res.send("Jairo la suma de 2 + 2 es : " + suma);
})

app.listen(port, ()=>{
    console.log(`Jairo, el servidor ya se encuentra en http://localhost:${port}`);
})