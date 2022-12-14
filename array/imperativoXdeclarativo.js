const alunos = [
    {nome: 'felipe', nota: 10},
    {nome: 'laurel', nota: 9.9}
]

//Imperativo
let soma1 = 0
for(let i = 0; i<alunos.length; i++){
    soma1+=alunos[i].nota
}
console.log(soma1/alunos.length)

//Declarativo
const getnota = aluno =>aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getnota).reduce(soma)
console.log(total2/alunos.length)