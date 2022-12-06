/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo) */

let stringpontuação = "11, 10, 12, 13, 14"

function avalia(stringpontuação){
    let pontuaçoes = stringpontuação.split(", ")
    let qtdquebrarecord = 0
    let piorjogo = 1
    let maiorpontuaçao = pontuaçoes[0]
    let menorpontuaçao = pontuaçoes[0]

    for(let i = 1; i < pontuaçoes.length; i++){
        if(pontuaçoes[i] > maiorpontuaçao){
            maiorpontuaçao = pontuaçoes[i]
            qtdquebrarecord++
        } else if(pontuaçoes[i] < menorpontuaçao ){
            menorpontuaçao = pontuaçoes[i]
            piorjogo = i+1
        }
    } 
    return[qtdquebrarecord, piorjogo]
}
console.log(avalia(stringpontuação))