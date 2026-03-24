// funcoes construtoras
const Hotel = function(){

    this.nome = "hotel do dani"
    this.quantidadeSuite = 60
    this.suitesOcupadas = 30

    this.reservar = function(){
        this.suitesOcupadas++
        console.log("Ocupadas: " + this.suitesOcupadas)
    }

}

const produto = new Hotel() 
hotel.reservar()