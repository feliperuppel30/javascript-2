Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0)

const carro = {
    velatual: 0,
    velmax:200,
    acelerar(delta){
        if(this.velatual +  delta <= this.velmax){
            this.velatual+=delta
        }else{
             this.velatual = this.velmax
        }
    },
    status(){
        return `${this.velatual}KM/h de ${this.velmax}`
    }

}

const ferrari ={
    modelo:'f40',
    velmax: 320
}
const volvo = {
    modelo:'v40',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerar(250)
console.log(volvo.status())
ferrari.acelerar(250)
console.log(ferrari.status())

