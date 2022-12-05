const pessoa = {
    saudaçao: 'bom dia',
    falar(){
        console.log(this.saudaçao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e oo

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()