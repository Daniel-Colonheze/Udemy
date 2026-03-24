function processar(callbackSucesso, callbackErro){
/* 
    acoes
    ...
*/
let resultado = true
if( resultado ){
    callbackSucesso()
}else{
    callbackErro()
}

}

const salvarResultado = function(){
    /* 
    ...
    */
   console.log("salvar resultado")
}


const erro = function(){
    /* 
    ...
    */
   console.log("erro")
} 

processar(salvarResultado, erro)