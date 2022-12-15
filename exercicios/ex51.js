//voce escreverá uma função que recebe um objeto como primeiro parametro e , como segundo parametro o nome d euma propriedade contida nesse objeto. em seguida retorne uma copia desse objeto sem a propriedade especificada no segundo parâmetro

const removerPropriedade = (objeto, nomePropriedade)=>{
    const copia = Object.assign({},objeto)
    delete copia[nomePropriedade]
    return copia
}
console.log(removerPropriedade({a:false}))