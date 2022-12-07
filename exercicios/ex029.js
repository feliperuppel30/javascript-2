/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */


function int(valor){
    let noint= 0
    let foradoint= 0
    for(let i = 0; i < valor.length; i++){
        if(valor[i]>=10 && valor[i]<=20){
            noint++
        }else{
            foradoint++
        }
    }console.log(`${noint} estão no intervalo entre [10,20] e ${foradoint} estão fora`)
}
let num = [1, 2, 12, 15, 16, 17, 20, 21, 23, 25, 27]
int(num)