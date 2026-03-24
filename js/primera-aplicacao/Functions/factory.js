// padrao de desing ou padrao de projetos - factory

const produto = {
    nome: "notebook",
    preco: 1200
}

const produto2 = {
    nome: "notebook",
    preco: 1200
}

const produtoFactory = function(nome, preco){

    //dados

    return{
        nome,
        preco,
        recuperarAvaliacoes(){
            console.log(`Avaliacoes para ${this.nome}`)
        }
    }
}

const produto1 = produtoFactory("Notebook", 4000)
produto.recuperarAvaliacoes()
console.log(produto)