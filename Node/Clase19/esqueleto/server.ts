// Importaciones
import express = require("express")
import {Request, Response, NextFunction} from "express"
import {Router as routerIndex} from "./routes/index.route"
import {Router as routerUsuario} from "./routes/usuario.route"

// Declaraciones
const app = express()

// Archivos estáticos
app.use(express.static("./public"))

// Rutas
app.use("/", routerIndex)
app.use("/usuario", routerUsuario)

// Manejadores de Errores
app.use((req: Request, res: Response, next: NextFunction) => {
  res
    .sendFile(__dirname + "/public/index.html")
/*   res
    .status(404)
    .send("Ruta no encontrada") */
})

app.listen(4000, ()=>console.log("Servidor ejecutándose en el puerto 4000"))