function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        if(self.idade<10){
        self.idade++
        console.log(self.idade)
    }}/*.bind(this)*/, 1000)
}
new pessoa
