
        // classe especifica usando selector e pelo Id
 const obj1 = document.getElementById('destaque') // pega pelo id
const obj2 = document.querySelector('li.primeiro') // pega uma classe especifica

function executar(argumento){
    const obj2 = document.querySelector('li.primeiro')
    obj2.innerHTML = "teste"
}

const obj = document.getElementsByTagName()
    obj.classList.add("destaque");
}

        // Pela tag
/* 
const obj3 = document.getElementsByTagName('div'); // pega pela tag
//const obj3 = document.getElementsByTagName('li'); // pega pela tag

for(let i = 0; i < obj.clientHeight; i++){
    console.log(obj[i].textContent)
}



const colecao = document.getElementsByTagName('li') // pela tag

const lista = Array.from(colecao);
const funcao = function(item, i){
    console.log(item)
}
lista.forEach(funcao)

 */

        // Pela classe
/* 
const obj = document.getElementsByClassName('vermelho') // pela classe, se tiver das com o mesmo nome voce pode usar array para acessar
const obj = document.getElementsByName("nome") // usa em formularios, pega o nome do imput

console.log(obj[0])

 */

 // selector all

 const obj = document.querySelectorAll()
