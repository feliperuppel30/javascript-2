const escola = [{
    nome: 'turma Mq',
    alunos:[
        {nome: 'felipe', nota: 8},
        {nome: 'laurel', nota: 9},
        {nome: 'sophia', nota: 9.9},
        {nome: 'floki', nota: 10}
    ]
}, {
    nome:'turma M2',
    alunos:[
        {nome: 'pituca', nota: 5},
        {nome: 'koda', nota: 6},
        {nome: 'fofuxae', nota: 7},
        {nome: 'guaxinim', nota: 7.5},

    ]
}]

const notas = n1=>n1.nota
const notaTurma = turma => turma.alunos.map(notas) 

const notas1 = escola.map(notaTurma)
console.log(notas1)