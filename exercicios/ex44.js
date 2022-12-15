//crie um funçao  que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. por exemplo, se a entrada for 2, feveriro...

const calendario = mes =>{
    if(mes<= 0 || mes >=13){
       console.log(`mês inválido`)
    }else{
        switch(mes){
            case 1: console.log(`mes ${mes} é janeiro `) 
            break
            case 2: console.log(`mes ${mes} é feveriro `) 
            break
            case 3: console.log(`mes ${mes} é março `) 
            break
            case 4: console.log(`mes ${mes} é abril `) 
            break
            case 5: console.log(`mes ${mes} é maio `) 
            break
            case 6: console.log(`mes ${mes} é junho `) 
            break
            case 7: console.log(`mes ${mes} é julho `) 
            break
            case 8: console.log(`mes ${mes} é agosto `) 
            break
            case 9: console.log(`mes ${mes} é setembro `) 
            break
            case 10: console.log(`mes ${mes} é outubro `) 
            break
            case 11: console.log(`mes ${mes} é novembro `) 
            break
            case 12: console.log(`mes ${mes} é dezembro `) 
            break
        }
    }
}
calendario(1)
calendario(2)
calendario(3)
calendario(4)
calendario(5)
calendario(6)
calendario(7)
calendario(8)
calendario(9)
calendario(10)
calendario(11)
calendario(12)
calendario(13)
