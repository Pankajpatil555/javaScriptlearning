function prime_num(numb){
    for (let i = 2;i < numb; i++) {
        
       if (numb%i==0) {
        return false
       } 
    }
    return true


}

console.log(prime_num(8));
console.log(prime_num(11));
console.log(prime_num(22));