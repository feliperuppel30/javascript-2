const alunos = [
    {nome: 'felipe', nota: 7.3, bolsista: true},
    {nome: 'laurel ', nota: 9.2, bolsista: false},
    {nome: 'sophia', nota:9.8, bolsista: true},
    {nome: 'débora', nota: 8.7, bolsista: true}
]


// todos os alunos sao bolsistas?
 const todosBolsistas = (resultado, bolsista) => resultado && bolsista
 console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))
