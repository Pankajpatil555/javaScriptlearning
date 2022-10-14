console.log("******************1***************************");
const maleMarrigeEligibility=function(gender,age,boyName){
    var ageEligi=(age>=21)?`hey ${boyName} you are eligible for marrige `:`hey ${boyName} you are not eligible for marrige`
    console.log(ageEligi);

}
maleMarrigeEligibility("male",25,"prashant")
maleMarrigeEligibility("male",15,"dada")

console.log("******************2***************************");


const femaleMarrigeEligibility=function(gender,age,girlName){
    var female=gender
   if(gender=female&&age>=18){
    console.log(`hey ${girlName} you are eligible for marrige`);
   }
   else{
   console.log(`hey ${girlName} you are not eligible for marrige`);
   }
}
femaleMarrigeEligibility("female",25,"melinda")
femaleMarrigeEligibility("female",15,"jenifer")

console.log("******************b.1***************************");
const oddEven = function (num1) {
   if(num1%2==0){
    console.log(`${num1} is even number`);
   }
   else{
    console.log(`${num1} is odd number`);
   }
}
oddEven(45)
oddEven(70)
oddEven(67)
oddEven(98)

console.log("******************b.2***************************");
const voteage=function(age){
    if(age>=18){
        console.log(`your age is ${age} you are eligible for voting`);
    }
    else{
        console.log(`your age is ${age} is not eligible fot vot`);
    }
}
voteage(18)
voteage(17)
voteage(20)
voteage(15)
console.log("******************b.3***************************");
const stringeli=function(str){
    var result=str.length
    if(result>=10){
        console.log(`${str} is contains more than 10 character`);
    }
    else{
        console.log(`${str} is not contain more than 10 character`);
    }
}
stringeli("javascript")
stringeli("es6")

console.log("******************b.4***************************");
const strt=function(str){
    if(str.startsWith("java")){
       console.log(`${str} string start with java`);
    }
    else{
       console.log( `${str} string not start with java`);
    }
   
}
strt("java langauge")
strt("python lang")









function oddEven(num1){
    if(num1%2==0){
        console.log("number is even ");
    }
    else{
        console.log("number is odd");
    }

}
var number=oddEven(45)
console.log(number);