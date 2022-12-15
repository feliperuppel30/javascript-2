//Cri e uma  função  que receba um  array  de elemento s e  retorne um  array  somente  co m  o s números presentes  no array  recebido  co mo   p arâmetro 

const onlynum = (a) =>{
    result = []
    for(let i = 0; i<a.length; i++){
        if(typeof a[i] == Number){
             result.push(a)
             return result
        }
        
    }
}
console.log(onlynum([1,2]))
