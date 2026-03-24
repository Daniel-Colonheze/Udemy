// funcoes construtoras
const Hotel = function(){

    this.nome = "hotel do dani"
    this.quantidadeSuite = 30
    this.suitesOcupadas = 26

    this.reservar = function(){
        if(this.suitesOcupadas < this.quantidadeSuite){
            this.suitesOcupadas++
            console.log("Ocupadas: " + this.suitesOcupadas)
        }else{
            console.log("Estamos lotados")
        }
    }

}

const hotel = new Hotel() 
hotel.reservar()