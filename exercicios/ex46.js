//cria uma função que receba quatro numeros como parâmetro(num, min, max, inclusivo) e retorne se o parametro 'num' está entre o min e o max. Quando o parametro 'Inclusivo' for true, tenha "entre" como 'inclusivo'

const analisador = function(num, min = 1, max = 10, inclusivo){
    if(inclusivo == true){
        if(num >= min && num <= max){
            console.log(`seu numero ${num} está entre o ${min} e ${max}`)
       } 
    } else if(num >min && num < max){
        console.log(`seu numero ${num} está entre o ${min} e ${max}`)
    } else{
        console.log(`seu numero nao está entre o min e máx`)
    }
}
analisador(0,0,10,true)