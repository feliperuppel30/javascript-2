function aula(nome, videoid){
    this.nome = nome
    this.videoid = videoid
}
const aula1 = new aula('Bem Vindo', 123)
const aula2 = new aula('até breve', 241)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params){
    const obj ={}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'até breve', 241)
console.log(aula3, aula4)