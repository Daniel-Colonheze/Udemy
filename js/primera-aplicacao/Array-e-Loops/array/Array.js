let nomes = ["Daniel", "Leticia", "Bruno"]
nomes.push("Fernando") //adicionar algo no array
delete nomes[0]// deletar um item especifico
console.log(nomes[0])


const lista = []

const nomes2 = ['Daniel', "jamilton"]

//metodos

const estados = ["sp", "ceara", "rj", "bahia"]

//  remove elementos do array  //
estados.pop() // remove o ultimo
estados.shift()// remove o primeiro

// adiciona elementos noa array  //
estados.push("Minas Gerais") // adiciona no final
estados.unshift("teste") // adiciona no inicio

// renorta novo array //
const novo = estados.splice(0, 2, "teste1", "teste2")  // emendar, a partir do primeiro inde que colocou ele remove ate chegr no final que foi determindado
                                    // e da para adicionar por isso ele tbm consegue adicionar elementos

estados.slice(0, 2) // ele corta elementos de um array

// ForEach

/* for(indice in estados){
    console.log(estados[indice])
}
 */

let list = ["item1", "item2", "item3", "item4"]

function percorrer(item, i){
    console.log(item)
}

list.forEach(percorrer())


// map

let pessoas = ["daniel", "bruna", "leonardo", "maria"]


let funcao = function (item, indice, arr){
    return "Ola" + item
}

const novoArray = pessoas.map(funcao)


const produtosDolar = [
    {produto: " Notebook", preco: 1200, moeda: "$"},
    {produto: " Celular", preco: 800, moeda: "$"}
]

const novo2 = produtosDolar.map(function(item){
    let preco = item.preco * 3
    return {produto: "Notebook", preco: preco, moeda: "R$"}
})