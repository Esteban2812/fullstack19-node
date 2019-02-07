import express = require("express")
import {Request, Response, NextFunction} from "express"
import { UsuarioController } from "../api/controller/usuario.controller";
import { Request,Response,NextFunction } from "express"
const Router = express.Router()

const controlador = new UsuarioController()
Router.get("/", controlador.listar() )
// Router.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res
//     .json([
//       {id: 1, nombre: "Alfonso"},
//       {id: 2, nombre: "Javier"},
//       {id: 3, nombre: "Kelly"},
//       {id: 4, nombre: "Jana"}
//     ])
// })

Router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  res
    .json([
      {id: 1, nombre: "Alfonso"}
    ])
})

Router.post("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .json([
      {status: 201, message: "Record created"}
    ])
})

export {Router}