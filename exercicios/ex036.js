/**36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */


function tal1(valor,vetor){
    let resultado=[]
    vetor.forEach(element => {
        resultado.push(element*valor)
    })
    return resultado
}
vetor= [1,2,3,4,5]


function tal2(valor, vetor){
    let resultado2=[]
    if(valor<5) return 
        vetor.forEach(element => {
        resultado2.push(element*valor)
        })
        return resultado2
    
}
console.log(tal1(11, vetor))
console.log(tal2(-11,vetor))
