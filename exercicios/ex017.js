/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano - Aumento
---------------
A    -   10%
B    -   15%
C    -   20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido*/

function salario(salarioatual,aumento){
    switch(aumento){
        case 'a':
            console.log(`o seu saláro é de ${salarioatual} e com aumento A fica ${salarioatual*1.10} `)
            break
        case 'b':
            console.log(`o seu saláro é de ${salarioatual} e com aumento B fica ${salarioatual*1.15} `)
            break
        case 'c':
            console.log(`o seu saláro é de ${salarioatual} e com aumento C fica ${salarioatual*1.2} `)
            break
        default:
            console.log('aumento inválido')
    }
}
salario(1500,'a')
salario(1500,'b')
salario(1500,'c')
salario('c',1500)