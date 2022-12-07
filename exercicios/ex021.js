/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function convenio(idade){
    if(idade <10){
        return `vc é kid e paga a taxa de R$ ${100+80}`
    }
    if(idade<30){
        return `vc é adolepeixe e paga R$ ${100+50}`
    }
    if(idade<65){
        return `vc é adulto e paga R$ ${100+95}`
    } else{
        return `vc é veinho e paga R$${100+130}`
    }
}
console.log(convenio(8))
console.log(convenio(12))
console.log(convenio(32))
console.log(convenio(66))
console.log(convenio(990))