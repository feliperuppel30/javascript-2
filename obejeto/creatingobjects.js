const obj1 ={}
console.log(obj1)

//object em JS 
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//constructor functions
function Produto(nome, preço, desc){
    this.nome = nome
    this.getPreçoComDesconto = ()=> {
        return preço *(1-desc)
    }
}
const p1 = new Produto('caneta', 8, 0.15)
const p2 = new Produto('noteboook', 8000, 0.25)
console.log(p1.getPreçoComDesconto())
console.log(p2.getPreçoComDesconto())

//factory function 

function criarFuncionario(nome, salariobase, faltas){
    return{
        nome, 
        salariobase, 
        faltas,
        getsalario(){
            return ((salariobase/30) * (30-faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario('felipe', 8000, 2)
const f2 = criarFuncionario('laurel', 7000, 2)
console.log(f1.getsalario())
console.log(f2.getsalario())


//object.create

const pet = Object.create(null)
pet.nome = 'Floki'
console.log(pet)

// funçao JSON que retorna um Object

const fromJSON = JSON.parse('{"info": "JSON brabo dmais"}')
console.log(fromJSON.info)