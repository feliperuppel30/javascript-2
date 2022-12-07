//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function par(vetornum){
    for(let i = 1; i<vetornum.length; i++){
        if(vetornum[i]%2==0){
            console.log(`${vetornum[i]} é par`)
        }else{
            console.log(`${vetornum[i]} é impar`)
        }
    }

}
let num=[1, 2, 3, 4, 5, 6, 7,8 ,9 ,10 , 12, 124, 4213, 412, 523]
par(num)