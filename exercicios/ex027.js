/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function crescimento(a1, c1, a2, c2){
    if(a1==a2){
        if(c1>c2){
            return 'a kid 1 vai ultrapassar a kid 2 em um ano'
        } else if(c1<c2){
            return 'a kid 2 vai ultrapassar a kid 1 em um ano'
        } else{
            return 'a kids tem o mesmo tamanho e continuarão assim pra sempre'
        }
    } else{
        if(a1>a2){
            if(c1 >= c2){
                return 'a kid menor nao ultrapassará a menor'
            } else {
                return`a kid menor ultrpassará a maior em ${calculartempo(a1, c1, a2, c2)} anos`
            }
        } else{
            if(c2 >= c1){
                return 'a kid menor nao ultrapassará a maior'
            } else{
                return `a kid menor ultrapassará a maior em ${calculartempo(a1, c1, a2, c2)} anos `
            }
        }
        
    }
   
}
function calculartempo(amenor, cmenor, amaior, cmaior){
    let anos = 0
    while(amenor<amaior){
        amenor+=cmenor
        amaior+=cmaior
        anos++
    }
    return anos 
}
console.log(crescimento(150, 2, 130, 4))