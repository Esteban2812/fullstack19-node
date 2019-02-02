import http = require("http")
import fs = require("fs")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
  const ruta = req.url
  const metodo = req.method

  if(ruta=="/" && metodo=="POST") {
    const lector = fs.createReadStream("./home.html", {encoding: "utf8"})

    res.setHeader("content-type", "text/html")
    res.statusCode = 200

    lector.pipe(res)
  }
  else if(ruta=="/usuarios" && metodo=="GET") {
    res.setHeader("content-type", "application/json")
    res.statusCode = 200

    const lista = [
      {id: 100, usuario: "usuario 1"},
      {id: 200, usuario: "usuario 2"},
      {id: 300, usuario: "usuario 3"},
      {id: 400, usuario: "usuario 4"},
      {id: 500, usuario: "usuario 5"},
    ]
    res.write(JSON.stringify(lista))
    res.end()
  } 
  else if(ruta=="/descargar") {
    res.setHeader("content-type", "application/pdf")
    res.statusCode = 200

    const lector = fs.createReadStream("./memoria.pdf")
    lector.pipe(res)
  }
  else if(ruta=="/redireccion") {
    res.setHeader("Location", "http://area51.pe")
    res.statusCode = 302
    res.end()
  } else {
    res.setHeader("content-type", "text/plain")
    res.statusCode = 404
    res.end("Ruta no encontrada")
  }
})

servidor.listen(4000, ()=>console.log("Servidor ejecutándose en el puerto 4000"))