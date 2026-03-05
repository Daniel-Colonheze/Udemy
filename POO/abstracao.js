class Carro {
    constructor(){
        this.marca = "Volkswagen",
        this.modelo = "Gol",
        this.cor ="Prata",
        this.placa = "EMJ-2892"
    }
    ligar(){



    }
}

const carro = new Carro()
carro.modelo = "golf" // ele muda o modelo do carro

const carro2 = new Carro()

// LOja virtual
class Produto {
    constructor(){
        // Roupa
        this.preco = 102.99
        this.tamanho = "M"
        this.cor = "Azul"

        // Eletronicos
        this.altura = "50cm"
        
    }
}