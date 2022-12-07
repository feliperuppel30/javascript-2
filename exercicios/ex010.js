/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */
function verif(numero){
    if(numero%3 == 0){
        return true
    } else{
        return false
    }
}
console.log(verif(21))
console.log(verif(22))
console.log(verif(24))
console.log(verif(1425))
