Array.prototype.filter2 = function(callback){
    const res = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
        res.push(this[i], i, this) 
        }
    }
    return res
}

const produtos = [ 
    {nome: 'noteboook', preço: 8000, fragil:true},
    {nome: 'Ipad pro', preço: 5000, fragil:true},
    {nome: 'pc gamer ', preço: 7000, fragil:true},
    {nome: 'suporte note', preço: 200, fragil:true},
    {nome: 'cabo usb', preço: 50, fragil:false},
]
const caro = produto => produto.preço >=5000
const fragil = produto => produto.fragil
const resultado = produtos.filter2(caro).filter2(fragil)

console.log(resultado)