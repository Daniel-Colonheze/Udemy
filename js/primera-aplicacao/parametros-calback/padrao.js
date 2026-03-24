// Parametros padrao

/* function somar(num1, num2){
    num1 = isNaN(num1) ? 0 : num1
    num2 = isNaN(num2) ? 0 : num2
    return num1 + num2
}
 */

// Vallor padrao segundo es2025
/* function somar(num1=0, num2=0){
    return num1 + num2
} 
    somar(10, 10)
*/

//NaN -> Not a number ou seja a funcao usada la em cima verifica 
//se aquilo e um numero ou nao, se nao retorna true, se sim retorna false


// Parametros e retornos opcionais

function calcularSalario(salario, desconto){
    //desconto = isNaN(desconto) ? 0 : desconto
    if(salario == 0){
        console.log("Salario nao informado")
    }else{
        return salario - desconto
    }
}

let resultado = calcularSalario(100)
console.log(resultado)