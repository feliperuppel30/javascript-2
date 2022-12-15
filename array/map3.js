Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
};


const carrinho = [
    '{"nome":"caneta", "preço": 3.50}',
    '{"nome":"caderno", "preço": 10.99}',
    '{"nome":"lapis coloridos", "preço":20.99}',
    '{"nome":"corretivo", "preço":7}',

]

//retornar um array apenas com os preços

const paraObj = jason => JSON.parse(jason)
const onlyPrice = nud => nud.preço
const result = carrinho.map2(paraObj).map2(onlyPrice)
console.log(result)