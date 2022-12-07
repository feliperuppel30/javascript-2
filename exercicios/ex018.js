/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/ 

function writer(n){
    switch(n){
        case 0:
            return 'zero'
            break
        case 1:
            return'um'
            break
        case 2:
             return 'dois'
             break
        case 3:
            return 'três'
            break
        case 4: return 'quatro' 
            break
        case 5: return 'cinco'
        break
        default: return 'numero invalido'
        }
}
console.log(writer(1))
console.log(writer(2))
console.log(writer(3))
console.log(writer(4))
console.log(writer(5))
console.log(writer(6))