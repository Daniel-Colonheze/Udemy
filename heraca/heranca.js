// Herança - Reutilização e manutenção
// Classe: Cao Passaro
class Animal {//superclasse - pai
  constructor(){
    this.cor = ""
    this.tamanho = 0
    this.peso = 0
  }
  correr(){
    console.log("correr")
  }
  dormir(){
    console.log("correr")
  }
}

class Cao extends Animal {//subclase - filha
  latir(){
    console.log("latir")
  } 
}

class Passaro extends Animal {//subclase - filha
  voar(){
    console.log("voar")
  }
}

// Instancia
const cao = new Cao()
const passaro = new Passaro()

//cao.correr()
passaro.correr()
passaro.voar()
//passaro.cor = "Amarelo"
//console.log( passaro.cor )

/*
cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
*/

