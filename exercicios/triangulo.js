function triangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        console.log('este triangulo é equilátero')
    } else if( l1 == l2 || l2 == l3 || l1 == l3){
        console.log(`este triangulo é isósceles`)
    } else{
        console.log(`este triangulo é escaleno`)
    }
}
triangulo(112,122,12)