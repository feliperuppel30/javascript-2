function pessoa(){
    this.idade = 0

    const self = this
    setInterval(() => {
        if(self.idade < 10){ 
            
        self.idade++
        console.log(self.idade)
        
    }}, 1000);
}
new pessoa
