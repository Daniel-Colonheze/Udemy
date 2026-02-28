// Funcao anonima
const somar = function(){
    console.log(a+b)
}
somar(1,2)

//Arrow function
const somar = (a,b) => {
    console.log(a+b)
}
somar(1,2)

//funcao arrow (retorno implicito )
const somar = (a,b) => console.log(a+b)
const exibir = n => console.log(n)
const somar = (a,b) => a+b
exibir("teste");
let resultado = somar(1,2)
console.log(resultado)