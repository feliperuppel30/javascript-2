//desenvolva uma function que recebe dois numeros inteiros nao negativos e realize a multipliocaçao deles. porem nao utilize o operador de multiplicaçao

const mult = (a,b) =>{
    let resultado = 0
    for(let i = 0; i < b; i++){
        resultado =resultado + a
    } return resultado
}
console.log(mult(2,9))