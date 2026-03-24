function contarQuantidadeLetras(produto){

    try {
         console.log( produto.nome.length )
    }catch(erro){
        //tratarErro( erro )
        console.log("Erro")
    }/* finally {
        console.log("finally")
    }
    */
}


function tratarErro( erro ){
    throw new Error("Codigo de erro")

}

const produto = {
    nome: 'Notebook',
    preco: 4000

}

contarQuantidadeLetras(produto);