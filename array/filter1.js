const produtos = [ 
    {nome: 'noteboook', preço: 8000, fragil:true},
    {nome: 'Ipad pro', preço: 5000, fragil:true},
    {nome: 'pc gamer ', preço: 7000, fragil:true},
    {nome: 'suporte note', preço: 200, fragil:true},
    {nome: 'cabo usb', preço: 50, fragil:false},
]

console.log(produtos.filter(function(p){
    if(p.preço>=5000 && p.fragil){
        return produtos
    }

}))