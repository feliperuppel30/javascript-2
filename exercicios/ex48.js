//escreva uma function que receba dois parametros, o 1o repetirá e o 2o quantas vezes repetirá, um array sera retornado

const repet = function(a,b){
    resultado =[]
    for(let i = 0; i<b;i++){
        resultado.push(a)
    } return resultado
}
console.log(repet(297, 3))