/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verif(string1, string2){
    let estacontido = true
    
    for(let i = 0; i<string1.length; i++){
        let caracterString1 = string1.charAt(i).toLowerCase()
        
        for(let j =0; j<string2.length; j++){
            let caracterString2 = string2.charAt(j).toLowerCase()

            if(caracterString1 == caracterString2){
                estacontido = true
                break
            } else{
                estacontido = false
            }
        }
        if(!estacontido){
            return estacontido
        }
    }
    for(let i = 0; i<string2.length; i++){
        let caracterString2 = string2.charAt(i).toLowerCase()

        for(let j = 0; j<string2.length; j++){
            let caracterString1 = string1.charAt(j).toLowerCase()

            if(caracterString1 == caracterString2){
                estacontido = true
            }else{
                estacontido = false
            }
        }
        if(!estacontido){
            return estacontido
        }
    }
    return estacontido
}
console.log(verif('abc', 'abc'))