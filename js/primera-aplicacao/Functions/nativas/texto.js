// para ver mais funcoes nativas e metodos pesquise no site webschools.com

/*
 const nome{
    texto: "ja",
    length: 2,
    chartAt(){}
} 
*/

let nome = "carro do daniel"
/* 
nome.length  : ele retorna a quantidade de caracteres

nome.chartAt(1) : ele pega a posicao especifica de uma variavel como por exemplo
                  o nome daniel, se eu colocar 0 dentro do parenteses ele pega o D
                  se coloca 1 ele pega o A.

let n = nome.replace("daniel", "Goncalves") : ele troca umapalara especifica tipo daniel vai ser sub por goncalves
 
let frase = "Eu gosto de comer pacoca"
frase.subtr(0, 4)  : ele comeca do zero e vai ate o caracter que eu especifique
                     se eu colocar length no ultimo ele pega tudo (start, final)

*/

let nome2 = "daniel"
let sobrenome = "colonheze"
let s = sobrenome.slice(0, 4)

nome2 + s + "daniel@gmail.com"

nome.toUpperCase()
nome.toLowerCase()