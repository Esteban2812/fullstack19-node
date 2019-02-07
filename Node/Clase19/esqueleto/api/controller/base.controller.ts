import { Response } from "express"

export class BaseController {

    constructor(private modelo:any){
        this.listar = this.listar.bind(this)
        this.detallar = this.detallar.bind(this)
        this.insertar = this.insertar.bind(this)
        this.modificar = this.modificar.bind(this)
        this.eliminar = this.eliminar.bind(this)

    }

    listar(){
        console.log(this.modelo)
        req: Request, res: Response, next: NextFunction) => {
              res
                 .json([
                   {id: 1, nombre: "Alfonso"},
                   {id: 2, nombre: "Javier"},
                   {id: 3, nombre: "Kelly"},
                   {id: 4, nombre: "Jana"}
                 ])
             }
    }
    insertar(){}
    detallar(){}
    modificar(){}
    eliminar(){}
}