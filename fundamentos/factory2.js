function criarproduto(nome, preço, desconto = 0.1){
    return {
        nome,
        preço, 
        desconto
    }
}
console.log(criarproduto('nescau', 10.99, 4))
console.log(criarproduto('café', 8.99, ))