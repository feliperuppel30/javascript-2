const carrinho = [
    '{"nome":"caneta", "preço": 3.50}',
    '{"nome":"caderno", "preço": 10.99}',
    '{"nome":"lapis coloridos", "preço":20.99}',
    '{"nome":"corretivo", "preço":7}',

]

//retornar um array apenas com os preços

const paraObj = jason => JSON.parse(jason)
const onlyPrice = nud => nud.preço
const result = carrinho.map(paraObj).map(onlyPrice)
console.log(result)