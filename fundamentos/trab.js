function compras(trab1, trab2){
    const buysorvete = trab1||trab2
    const buytv50 = trab1 && trab2
    const buytv32 = trab1 != trab2
    const mantersaudavel = !buysorvete 

    return { buysorvete, buytv32, buytv50, mantersaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))