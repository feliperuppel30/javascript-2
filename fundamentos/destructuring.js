const pessoa = {
    nome:'felipe',
    sobrenome: 'Ruppel',
    endereço: {
        rua: 'trav mag',
        numero: 32,
    }
}
console.log(pessoa.nome)
const { nome:n, sobrenome:s} = pessoa
console.log(n, s)


const {idade = true, bemhumorado= true} = pessoa
console.log(idade, bemhumorado)
const{endereço:{rua, numero, cep}} = pessoa
console.log(pessoa.endereço.rua)
console.log(rua, numero, cep)