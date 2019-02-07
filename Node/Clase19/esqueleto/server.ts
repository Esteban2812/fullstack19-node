// Importaciones
import express = require("express")
import {Request, Response, NextFunction} from "express"
import {Router as routerIndex} from "./routes/index.route"
import {Router as routerUsuario} from "./routes/usuario.route"
import { IError } from "./interfaces/ierror.interface"


// Declaraciones
const app = express()

// Archivos estáticos
// app.use(express.static("./public"))

// Rutas
app.use("/", routerIndex)
app.use("/usuario", routerUsuario)

// Manejadores de Errores


app.use((req: Request, res: Response, next: NextFunction) => {
  const error: IError = new Error("Path not found")
  error.status = 404

  next(error)
 /* res
    .sendFile(__dirname + "/public/index.html")*/

  /*res
    .status(404)
    .json({
      status:404,
      message: "Path not found"
    })*/
})

app.use((error: IError, req: Request, res: Response, next:NextFunction)=>{
  res
    .status
})

app.listen(4000, ()=>console.log("Servidor ejecutándose en el puerto 4000"))