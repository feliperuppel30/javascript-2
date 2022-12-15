//pessoa ->nome -> {...}
const pessoa = {nome:'felipe'}
pessoa.nome = 'Laura'
console.log(pessoa)
pessoa.end = 'trav dos anões'
//pessoa -> nome ->{...} 
//pessoa = { nome: 'ana'}
Object.freeze(pessoa)
pessoa.nome = 'maria'
console.log(pessoa.nome)
console.log(pessoa.end)

const pessoaconstante = Object.freeze({nome:'felipe', sobrenome:'ruppel'})
console.log(pessoaconstante.nome, pessoaconstante.sobrenome)
pessoaconstante.nome = 'laurel'
console.log(pessoaconstante.nome)