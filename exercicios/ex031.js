//31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.

function neg(num){
    let negativos = 0
    for(let i = 0; i<num.length; i++){
        if(num[i] < 0){
            negativos++
        }
    } return negativos
}
let nums = [1,2,3,-1,-3,-2, -3]
console.log(neg(nums))