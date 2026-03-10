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
    console.log("como")
    console.log("um")
    //30 linhas
  }
  dormir(){
    console.log("correr")
  }
}

class Cao extends Animal {//subclase - filha
  constructor(){
    super()
    this.tamanhoOrelha = 0
  }
  correr(){
    super.correr()
    console.log("cao")
  }
  latir(){
    console.log("latir")
  } 
}

class Passaro extends Animal {//subclase - filha
  voar(){
    console.log("voar")
  }
}

class Papagaio extends Passaro { //subsubclasse - filha da filha
  falar(){
    console.log("falar");
  }
}

// Instancia
const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

//cao.correr()
passaro.correr()
passaro.voar()
papagaio.falar()
//passaro.cor = "Amarelo"
//console.log( passaro.cor )

/*
cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
*/

