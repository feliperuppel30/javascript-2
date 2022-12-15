// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', preço: 1.99, tag:'promotion'
})
console.log('extensível:', Object.isExtensible(produto)) 

produto.nome = 'borracha'
produto.descrição = 'aquela la mermo po' 
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome:'laurel', idade:21}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.nome = 'felipe'
pessoa.tag = 'o mais brabo dos brabos'
delete pessoa.idade

console.log(pessoa)

//Object.freeze = selado + valores constantes