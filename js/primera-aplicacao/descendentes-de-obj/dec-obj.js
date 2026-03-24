Object.prototype
const obj = {



}

//console.log(obj.toString())
//console.log( obj.__proto__ == Object.prototype)

class Carro{
    constructor(){
        this.placa = "APS-9032"
    }
}

class Bmw extends Carro {
    constructor(){
        super()
        this.nome = "BMW 320i"
    }
}

/* const objBMW = new Bmw() */
// Prototype chain - encadeiamento de objts
const veiculo = {
    motor: "50 cavalos"
}

const carro = {
    placa : "APS-9032",
    __proto__: veiculo, 
    acelerar(){
        console.log("acelerar")
    }
}

const bmw = {
    nome : "BMW 320i",
    __proto__: carro // esse proto serve tipo como extends

}

console.log(bmw.motor)