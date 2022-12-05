function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    
    this.falar = function(){
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const p1 = new pessoa('felipe', 23)
p1.falar()

const criarpessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome} `)
    }
}
const p2 = criarpessoa('jusé')
p2.falar()