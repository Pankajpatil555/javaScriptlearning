var age=[12,25,35,05,56,04,]
var result=age.filter(check)
function check(age){
    return age>18
}
console.log(result);





// reduse
console.log("====== reduce()=====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
