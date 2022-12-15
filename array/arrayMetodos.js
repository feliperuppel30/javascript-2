const jogadores = ['messi', 'cristiano ronaldo', 'richarlisson', 'neymar']

jogadores.pop() // remove o ultimo elemento
console.log(jogadores)

jogadores.shift() // remove o primeiro elemento do Array
console.log(jogadores)

jogadores.unshift('Ibraimovic') // adiciona em 1
console.log(jogadores)

jogadores.push('romarinho') // adiciona por ultimo
console.log(jogadores)

// splicer pode adicionar e remover elementos
// - adicionar:
jogadores.splice(2, 0, 'G. Jesus', 'segundo')
console.log(jogadores)

// - remover
jogadores.splice(3, 1)
console.log(jogadores)

let alguns = jogadores.slice(2) //novo array a aprtir do indice (2)
console.log(alguns)

let alguns2 = jogadores.slice(1,3) //novo array a aprtir do indice (2) até o 3
console.log(alguns2)