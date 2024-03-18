const http = require("http");
// Leer el archivo
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    // // Cargar los archivos readFile(__dirname +)
    // fs.readFile(__dirname + "/pages/pagina.html")
    // .then(contents => {
    //     res.setHeader("Content-Type", "text/html");
    //     res.writeHead(200);
    //     res.end(contents);
    // })
    // .catch(err => {
    //     res.writeHead(500);
    //     res.end(err);
    //     return;
    // });
    if (req.url=== '/') {
        fs.readFile(__dirname + "/pages/pagina.html")
        .then(contents => {
           res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
    } else if (req.url ==='/libros') {
        res.write("hola libro")
        res.end()
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`servidor http://${host}:${port}`);
});