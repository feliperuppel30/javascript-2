
// funçao atribuida a constante
const imprimirsoma = function(a,b){
    console.log(a+b)
}
imprimirsoma(2, 1)


// arrow function
const soma= (a,b) =>{
    return a + b
}
console.log(soma(2,3))

//retorno implícito

const subtraçao = (a, b)=> a-b
console.log(subtraçao(2,3))