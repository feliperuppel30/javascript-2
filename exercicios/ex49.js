//elabore uma function que recebe um numero como parametro e retorne uma string com o simbolo "+" na quantidade especificada no parametro

const plus = n =>{
    resultado = ''
    for(let i=0; i<n;i++){
        resultado += '+'
    }return resultado
}
console.log(plus(6))

//simples 
const repetiçao = n =>  "+".repeat(n)
console.log(repetiçao(9))
