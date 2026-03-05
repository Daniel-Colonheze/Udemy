class Usuario {
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotal = 0
    }

    logar (){

        let emailDB = "daniel@gmail.com"
        let senhaDB = "1234"
        if( senhaDB == this.senha && emailDB == this.email){
            //console.log("senha valida")
            return "senha valida"
        }else{
            //console.log("senha invalida")
            return "senha invalida"
        }
    }
    calcularCupom( cupom ){
        
        let desconto = 0
        if(cupom == "DESC20"){
            desconto = 20
        }else if( "FESTA10"){
            desconto = 10
        }else{
            console.log("Cupom invalido")
        }

        return this.subtotal - desconto

    }
}

const usuario = new Usuario()
//autenticacao
usuario.email = "daniel@gmail.com"
usuario.senha = "1234"
//desconto
usuario.subtotal = 279


let mensagem = usuario.logar()
let verCupom =usuario.calcularCupom( "FESTA10")
console.log(verCupom)
console.log(mensagem)