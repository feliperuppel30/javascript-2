const notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9]

    //sem callback
const notasbaixas1 = []
for(let i in notas){
    if(notas[i]<7){
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

    //com callback

const notasbaixas2 = notas.filter(function (nota){
    return nota <7
})
console.log(notasbaixas2)

    //callback com arrowF
//const notasbaixas3 = notas.filter(nota=> nota <7)
//console.log(notasbaixas3)

const notamenorque7 = nota=> nota<7 //reutilizável

const notasbaixas3= notas.filter(notamenorque7)
console.log(notasbaixas3)