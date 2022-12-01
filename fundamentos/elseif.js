Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirresultado = function(nota){
    if(nota.entre(9, 10)){
        console.log(`quadro de HONRA`)
    } else if(nota.entre(7,8.99)){
        console.log(`aprovado`)
    } else if(nota.entre(0, 6.99)){
        console.log(`reprovado`)
    } else{
        console.log(`nota inválida`)
    }
}
imprimirresultado(4)
imprimirresultado(7)
imprimirresultado(9)
imprimirresultado(-1)