// modificadore de acesso e getters e setter 
class ContaBancaria {
    constructor(){
        this._numeroConta = 20
        this._saldo = 0
    }

    get numeroConta(){
        return "Numero:" +  this._numeroConta
    }

    set numeroConta( numero ){
        if (numero > 0){
            this._numeroConta = numero
        }
    }
    get saldo(){
        return "Saldo: " + this._saldo
    }

    set saldo( saldo ){

        this._saldo = saldo

    }

}

let conta = new ContaBancaria();
conta.numeroConta = 50
conta.saldo = 30
console.log(conta.numeroConta)
console.log(conta.saldo)