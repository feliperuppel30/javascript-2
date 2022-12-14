const alunos = [
    {nome: 'felipe', nota: 7.3, bolsista: true},
    {nome: 'laurel ', nota: 9.2, bolsista: false},
    {nome: 'sophia', nota:9.8, bolsista: true},
    {nome: 'débora', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a =>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
