const imprimirnota = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log(`Quadro de Honra com a nota ${nota}`)
            break
        case 8: case 7:
            console.log(`Aprovado com a nota ${nota}`)
            break
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:  
            console.log(`reprovado com nota ${nota}`)
            break
        default:
            console.log(`Nota inválida ${nota}`)
    }
}
imprimirnota(4)
imprimirnota(7)
imprimirnota(9)
imprimirnota(6)
imprimirnota(3)
imprimirnota(2)
imprimirnota(-1)