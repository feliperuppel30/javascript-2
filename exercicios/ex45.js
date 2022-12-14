//crie uma função que receba um valor booleano ou numérico. o retorno da funcção deverá ser o inverso, se for dtring retorne uma mensagem "só aceitamos boolean/numérico e vc inseriu um TypeOf..."



const verif = function(valor){
    let boo = valor
    if(boo == true || boo == false){
        console.log(`${!boo}`)
    } else if(boo == Number(boo)){
        console.log(`${(boo*-1)}`)
    }
    else{
        console.log(`apenas permitidos: boolean/number, voce inseriu um ${typeof(boo)}`)
        
    }
}
verif()