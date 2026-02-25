let nomes = ["daniel", 
    "jamilton", "marina", "leticia", "ana julia", "carlos", "maria", "pedro", "fernando"]

function pesquisarNomes(){
    let itensLista = ''
    let nomePesquisa = document.getElementById('campo').value

    for(indice in nomes){
        let nome = nomes[indice]
        if( nomePesquisa == nome){
             itensLista += `<li class="list-group-item">${nome}</li>`
        }
    }
    document.getElementById("lista").innerHTML = itensLista  
}   

function carregarNomes(){
    
    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]

        itensLista += `<li class="list-group-item">${nome}</li>`

    }
    document.getElementById("lista").innerHTML = itensLista   
}