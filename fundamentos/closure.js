    // Closure é o escopo criado quando uma função é declarada
    // Esse escopo permite a função acessar e manipular as var externas à função

    //contexto lexico em ação!

    const x = 'global'
    function fora(){
        const x =  'local'
        function dentro(){
            return x
        }
        return dentro
    }
    const minhafunc = fora()
    console.log(minhafunc())