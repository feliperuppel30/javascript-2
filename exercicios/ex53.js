//Desenvolva uma  função  que  recebe  como   parâmetro   um  objeto   e retorne  um array  de arrays, em que  cada elemento  é  um array  formado   pelos pares  chave/valor  que corresponde a  um atributo   do   objeto . Observe  os exemplos abaixo   para  um melhor  entendimento

const objparaarray = function(objeto){
    const chave = Object.keys(objeto)
    const resultado = chave.map(chave=>[chave, objeto[chave]])   
    return resultado
}
console.log(objparaarray({codigo:01, nome:'caneta'}))