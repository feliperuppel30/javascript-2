//desenvolva uma funçao que recebe 2 parâmetros, um é a quantidade de horas trabalhdas por um funcionario num mes, e o quanto recebe por hora. o retorno da funçao deve ser a string 'salario igual a R$ X' em X o valor do salário  

const salario = (hours, payment) =>{
	return `seu salário nesse mês foi R$${(hours*payment).toFixed(2)}`
}
console.log(salario(80,10))