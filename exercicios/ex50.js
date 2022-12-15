const firstAndlast = elementos =>{
    let primeiroelemento = elementos[0]
    let lastelemento = elementos[(elementos.length-1)]
    return [primeiroelemento, lastelemento]
}
console.log(firstAndlast([1,'felipe',3,4,'ruppel']))
