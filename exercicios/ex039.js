/**39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */


function troca(vetor1,vetor2){
    if(vetor1.length == vetor2.length){
        for(let i = 0; i < vetor1.length; i++){
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
        
    }
    console.log(`novo vetor1 =${vetor1}`)
    console.log(`novo vetor2 =${vetor2}`)}else{
        console.log(`vetores de tamanho diferente`)
    }

    
}

let vetor1 = [1,2,3]
let vetor2 = [4,5,2]
 
troca(vetor1,vetor2)