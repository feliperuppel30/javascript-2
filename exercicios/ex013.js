/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/
const calend = function(dia){
    switch(dia){
        case 1: console.log(`fim de semana`)
        break
        case 2: case 3: case 4: case 5: case 6: 
        console.log(`dia de semana VAI TRABAIA VAGBUNDO`)
        break
        case 7:
        console.log(`final de semana na casa de praia`)
        break
        default: console.log('dia inválido a semana só tem 7 dias o burro')
        break
    }
}
calend(7)
calend(6)
calend(5)
calend(1)
calend(0)
calend(-1)

