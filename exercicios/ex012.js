//12) Faça um algoritmo que calcule o fatorial de um número.

function fat(n){
    if(n>1){
        return n*fat(n-1)
    }
    return n
}
console.log(fat(8))