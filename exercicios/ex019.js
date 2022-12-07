/*) O cardápio de uma lanchonete é o seguinte:

Código - Descrição do Produto -  Preço
-----------------------------------------
100   -   Cachorro Quente      -R$ 3,00
200       Hambúrguer Simples    R$ 4,00
300       Cheeseburguer         R$5,50
400       Bauru                 R$7,50
500       Refrigerante          R$3,50
600       Suco                  R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function lanche(cod, qtd){
    switch(cod){
        case 100:
            return `${qtd} x cachorro quente sai R$ ${3*qtd}`
            break
        case 200:
            return `${qtd} x Hambúrguer sai R$ ${4*qtd}`
            break
        case 300:
            return `${qtd} x Cheeseburguer sai R$ ${5.5*qtd}`
            break
        case 400:
            return `${qtd} x Bauru sai R$ ${7.5*qtd}`
            break
        case 500:
            return `${qtd} x Refrigerante sai R$ ${3.5*qtd}`
            break
        case 600:
            return `${qtd} x suco sai R$ ${2.8*qtd}`
            break
        default:
            return`codigo invalido`
        
    }
}
console.log(lanche(100,1))
console.log(lanche(200,1))
console.log(lanche(300,1))
console.log(lanche(400,1))
console.log(lanche(500,1))
console.log(lanche(600,1))
console.log(lanche(700,33))