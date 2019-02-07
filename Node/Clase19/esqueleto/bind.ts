const obj = {
    cantidad: 20,
//    obtenerCantidad: () => {
        obtenerCantidad: function()  {

        return this.cantidad
    }
}

console.log(obj.cantidad)
console.log(obj.obtenerCantidad)


const instancia = obj.obtenerCantidad
console.log(instancia())

