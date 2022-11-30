console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'bola2'
 console.log(obj1.nome)

 //criaçao de objetos e funçoes
function Object(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
 }
const obj2 = new Object('Cadeira')
const obj3 = new Object('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()