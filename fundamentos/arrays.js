const valores = [7.7, 8.9, 5.3, 9.9 ]
console.log(`${valores[0]} está quebrado`)

console.log(valores)
valores[2]= 9
console.log(`este valor foi alterado para ${valores[2]}`)
console.log(valores)
valores[5]= 9
console.log(valores)
valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0] // deletando valores
console.log(valores)
console.log(typeof valores)
