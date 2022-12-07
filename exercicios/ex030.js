//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function analise(vetor){
    let menor
    let maior
    for(let i = 0; i<vetor.length; i++){
        if(maior === undefined && menor === undefined){
            menor = vetor[i]
            maior = vetor[i]
        } else {
            if(vetor[i] > maior){
            maior = vetor[i]
            }
            if(vetor[i] < menor){
            menor = vetor[i]
            }
        }
    }
    return [maior,menor]
}
let num = [1,2,3,4,5,6]
console.log(analise(num))