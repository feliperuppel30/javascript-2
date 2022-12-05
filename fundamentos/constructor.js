function carro(velmax = 200, delta = 5){
    let velnow = 0
    
    this.acelerar = function(){
        if(velnow + delta <= velmax){
            velnow += delta
        }else{
            velnow = velmax
        }
        console.log(`${velnow} KM/h`)
    }
    this.getvelnow = function(){
        return velnow
    }
}
const uno = new carro
uno.acelerar()
console.log(uno.getvelnow())

const ferrari = new carro(350, 20)
ferrari.acelerar()

console.log(typeof carro)
console.log(typeof ferrari)
console.log(typeof uno)