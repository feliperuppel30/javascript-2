 // par nome/valor
 const saudaçao = 'Opa'//contexto lexico1
 
function exec(){
    const saudaçao = 'faala' //contexto lexico2
    return saudaçao
 }


 //objetos são grupos aninhados de pares nome/valor
const cliente={
    nome: 'Felipe',
    idade: 23,
    peso: 70,
    endereço:{
        logradouro: 'Rua das mariju',
        numero: 23,
    }
}
console.log(saudaçao)
console.log(exec())
console.log(cliente)