//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function media(notas){
    let soma = 0
    for(let i=0; i<notas.length; i++){
        if(notas[i]<0 || notas[i]>10){
            return `nota inválida`
        } else{
            soma+=notas[i]
        }
    } return soma/notas.length
    
}
 notas = [7,8,8,9,9,10 ]
console.log(media(notas))