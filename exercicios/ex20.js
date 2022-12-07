/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function sacar(valorsaque){
    let nota1 = 0
    let nota5 = 0
    let nota10 = 0
    let nota50 = 0
    let nota100 = 0
    let valornota = calc(valorsaque)
    while(valorsaque>=valornota){
        switch(valornota){
            case 100:
                valorsaque -= 100
                nota100++
                break
            case 50:
                valorsaque -= 50
                nota50++
                break
            case 10:
                valorsaque -= 10
                nota10++
                break
            case 5:
                valorsaque -= 5
                nota5++
                break
            case 1:
                valorsaque -= 1
                nota1++
                break
        }
        valornota = calc(valorsaque)
    }
    return elaborarnotas(nota1, nota5, nota10, nota50, nota100) 
}

function calc(valorsaque){
    if(valorsaque >= 100){
        return 100
    } else if(valorsaque>= 50){
        return 50
    } else if(valorsaque>=10){
        return 10
    } else if(valorsaque>=5){
        return 5
    } else if(valorsaque>=1 ){
        return 1
}
}

function elaborarnotas(nota1, nota5, nota10, nota50, nota100){
    let resultado = ''
    if(nota100>0){
        resultado += `${nota100} nota(s) de 100. `
    }
    if(nota50>0){
        resultado+= `${nota50} notas de 50. `
    }
    if(nota10>0){
        resultado+= `${nota10} notas de 10. `
    }
    if(nota5>0){
        resultado+= `${nota5} notas de 5. `
    }
    if(nota1>0){
        resultado+= `${nota1} notas de 1. `
    }
    return resultado
}
console.log(sacar(183 ));