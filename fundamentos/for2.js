const notas = [7, 5, 3, 2, 1, 8]
for(i in notas){
    console.log(`ID ${i}, nota: ${notas[i]} `)
}
const pessoa = {
    nome: 'felipe',
    sobrenome: 'ruppel',
    idade: 21,
    peso: 211,
}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}