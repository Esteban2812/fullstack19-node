import express = require("express")
import {Request, Response, NextFunction} from "express"

const Router = express.Router()

Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .json([
      {id: 1, nombre: "Alfonso"},
      {id: 2, nombre: "Javier"},
      {id: 3, nombre: "Kelly"},
      {id: 4, nombre: "Jana"}
    ])
})

export {Router}