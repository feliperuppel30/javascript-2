const pessoa = {
    nome: 'felipe',
    idade: 23,
    peso:71

}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([keys,values])=>{
    console.log(`${keys}:${values}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '30/09/1999'
})
pessoa.dataNascimento = 280
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assign 

const dest = {a:1}
const o1 = {b:2}
const o2={c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
