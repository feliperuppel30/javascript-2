function tratarerro(erro){
    throw('...')
}


function imprimirbegrito(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch(e){
        tratarerro(e)
    } finally{
        console.log('final')
    }
}
const obj ={ name:'Felipe'}
imprimirbegrito(obj)