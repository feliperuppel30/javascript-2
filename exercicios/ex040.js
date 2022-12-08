/**40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */


let nums = [5]
function tipo(nums){
    for(let i = 0; i<nums.length; i++){
        if(nums[i]<=4.9){
            console.log(`${nums[i]} é D`)
        } else if(nums[i]<= 6.9){
            console.log(`${nums[i]} é C, REPROVADO`)
        } else if(nums[i]<=8.9){
            console.log(`${nums[i]} é B`)
        } else if(nums[i]<=10){
            console.log(`${nums[i]} é A`)
        }
    }
}
tipo(nums)