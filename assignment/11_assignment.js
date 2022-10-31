const fruits_seasonal=["banana","orange","apple","mango","watermelon"]
const fisrt=fruits_seasonal[0]
const last=fruits_seasonal[fruits_seasonal.length-1]
console.log("**********************************1****************************");
console.log(fisrt);
console.log(last);
console.log("*********************************2*****************************");
fruits_seasonal.unshift("papaya")
console.log(fruits_seasonal);
console.log("*********************************3******************************");
fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);
console.log("******************************4*********************************");
fruits_seasonal.push("pineapple")
console.log(fruits_seasonal);
console.log("**********************************5*****************************");
fruits_seasonal.splice(4,0,"dragon fruit")
console.log(fruits_seasonal);
console.log("***************************6*************************************");
fruits_seasonal.splice(2,1,"kiwi")
console.log(fruits_seasonal);
console.log("*****************************7**********************************");
let select=fruits_seasonal.slice(1,4)
console.log(select);
console.log("***************************8*************************************");
let fru=fruits_seasonal[fruits_seasonal.length]
console.log(fru); 

