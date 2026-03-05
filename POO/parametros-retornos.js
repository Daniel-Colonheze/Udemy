class Usuario {
    constructor(){
        this.email = ""
        this.senha = ""
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
}

const usuario = new Usuario()
usuario.email = "daniel@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.logar()
console.log(mensagem)