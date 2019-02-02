// Importaciones
import express = require("express")
import {Request, Response} from "express"

// Declaraciones
const app = express()

// Rutas
app.get("/", (req: Request, res: Response) => {
  res
    //.status(200)
    .type("text/html")
    .send("<h1>Home</h1>")
})

app.get("/usuarios", (req: Request, res: Response) => {
  const lista = [
    {id: 100, usuario: "usuario 1"},
    {id: 200, usuario: "usuario 2"},
    {id: 300, usuario: "usuario 3"},
    {id: 400, usuario: "usuario 4"},
    {id: 500, usuario: "usuario 5"},
  ]

  res
    .json(lista)
   /*  .type("application/json")
    .send(JSON.stringify(lista)) */
})

app.post("/usuarios/edicion/:id", (req: Request, res: Response) => {
  const id = req.params.id

  res.send(id)
})

app.get("/redireccion", (req: Request, res: Response) => {
  res.redirect("https://area51.pe")
})

app.get("/descargar", (req: Request, res: Response) => {
  //res.sendFile(__dirname + "/memoria.pdf")
  res.download(__dirname + "/memoria.pdf")
})

app.listen(4000, ()=>console.log("Servidor ejecutándose en el puerto 4000"))