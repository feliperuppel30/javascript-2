function getpreço(imposto =0, moeda = 'R$'){
    return `${moeda} ${this.preço * (1- this.desc) * (1 + imposto)}`
}
const produto = {
nome: 'notebook',
preço: 7000,
desc: 0.15,
getpreço
}

globalThis.preço = 20
globalThis.desc = 0.1
console.log(getpreço())
console.log(produto.getpreço())

const carro= {
    preço: 49990,
    desc: 0.20,
}
console.log(getpreço.call(carro))
console.log(getpreço.apply(carro))

console.log(getpreço.call(carro, 0.01, '$'))
console.log(getpreço.apply(global, [0.01, '$']))