// Se o objeto for uma constante nao pode se atribuir mais atributos dentro dele
//So pode alterar um valor que ja existe
const produto = {
    nome: 'notebook'
}

Object.freeze( produto ) // converte um objeto em constante