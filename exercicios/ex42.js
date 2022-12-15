//escreva uma funçao  que receba a idade de uma  pessoa em anos e reteorne em dias 

const anos = function(idade){
    if(idade <= 0){
        return `idade inválida`
    } else{
        return `sua idade em dias é${idade*365}`
    }
}
console.log(anos(23)=-1)