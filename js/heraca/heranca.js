// Herança - Reutilização e manutenção
// Classe: Cao Passaro
class Animal {//superclasse - pai
  constructor(cor, tamanho, peso){
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }
  correr(){
    console.log("correr como um")
    //30 linhas
  }
  dormir(){
    console.log("correr")
  }
}

class Cao extends Animal {//subclase - filha
  constructor(cor, tamanho, peso, tamanhoOrelha){
    super(cor, tamanho, peso)
    this.tamanhoOrelha = tamanhoOrelha
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
  constructor(cor, tamanho, peso){
    super(cor, tamanho, peso)
  }
  correr(){
    super.correr()
    console.log("passaro")
  }
  voar(){
    console.log("voar")
  }
}

class Papagaio extends Passaro { //subsubclasse - filha da filha
   constructor(cor, tamanho, peso, falar){
    super(cor, tamanho, peso);
    this.sabeFalar = falar
   }
  falar(){
    console.log("falar");
  }
}

// Instancia
const cao = new Cao("Caramelo", 20, 40, 2)
const passaro = new Passaro("Azul", 7, 2)
const papagaio = new Papagaio("Marrom", 3, 4.9, true)
const animal = new Animal("preto", "30", "95")

//console.log(animal.peso)
//passaro.cor = "Amarelo"
//console.log( passaro.cor )
console.log(cao)
console.log(passaro)
console.log(papagaio)
/*
cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
*/

