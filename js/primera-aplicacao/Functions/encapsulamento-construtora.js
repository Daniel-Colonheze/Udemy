// funcoes construtoras
const Hotel = function(){

    this.nome = "hotel do dani"
    this.quantidadeSuite = 30
    let suitesOcupadas = 26

    this.reservar = function(){
        if(suitesOcupadas < this.quantidadeSuite){
            suitesOcupadas++
            console.log("Ocupadas: " + suitesOcupadas)
        }else{
            console.log("Estamos lotados")
        }
    }

}

const hotel = new Hotel() 
hotel.reservar()