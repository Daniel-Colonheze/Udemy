// Pilar -encapsulamento
class Carro{
    constructor(){
        this.modelo = "Gol"
        this.cor = "Azul"
    }

    freiar(){
        console.log("parar o carro");
    }

}

const carro = new Carro()
carro.freiar()