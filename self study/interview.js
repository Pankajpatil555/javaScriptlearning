console.log("******************************swap two variable wtot third var***********************************");
var a=100
var b=200
console.log(`a is:${a}`);
console.log(`b is:${b}`);
 a=a+b
 b=a-b
 a=a-b
 console.log("after swapping");
 console.log(`a is:${a}`);console.log(`b is:${b}`);

 console.log("******************************swap two variable using third var***********************************");
 console.log(`a is:${a}`);
console.log(`b is:${b}`);
var c=a
a=b
b=c
console.log("after swapping");
console.log(`a is:${a}`);console.log(`b is:${b}`);

console.log("******************************string operation***************************************************************************");
var gstring="TCS the indian it giant company"
var r=gstring.split('').reverse().join('')
console.log(r);
console.log("******************************count vovel***********************************");
var v= "a,e,i,v,A,E,I,O,U"
let count=0
for (const letter of gstring) {
    if(v.includes(letter)){
        count++
    }
    
}
console.log(`total number of vowels is :${count}`);
console.log("******************************duplicate vovel***********************************");
var coun=0
var spl=gstring.split('')
let dupli=[...new Set(spl)]
for (const i of dupli) {
    if(v.includes(i)){
        coun++
    }
    
}
console.log(`total number of vowels with out duplicate is :${coun}`);

console.log("******************************even index***********************************");

var spl=gstring.split('')
spl.forEach(function (currentValue,index) {
    if (index%2==0) {
       
    console.log(`element is: ${currentValue} position  is: ${index}`);  
  
    }
   
 });
 console.log("******************************total number of letter***********************************");
 var lengh=gstring.length
 console.log(`lenth is ${lengh}`)


 console.log("******************************array quetion basic****************************************************************");
 const array=[1,6,5,3,11,23,6,4,3,11]
 array.forEach(value => {
    console.log(value);
 });
 console.log("******************************reverse the array***********************************");
 var revs=array.reverse()
 console.log(revs);
 console.log("******************************odd index element***********************************");
 array.forEach(function (currentValue,index) {
    if (index%2!=0) {
       
    console.log(`element is: ${currentValue} position  is: ${index}`);  
    }
   
 });
 console.log("******************************last element***********************************");
 var laste=array[array.length-1]
 console.log(array);
 console.log(laste);
 console.log("****************************** 3 last element***********************************");
 var thirde=array.slice(-3)
 console.log(thirde);
 console.log("****************************** add element to last index***********************************");
 array.push(22)
 console.log(array);
 console.log("****************************** replace element to last index***********************************");
array.splice(11,1,5)
console.log(array);
console.log("****************************** add element begining of array***********************************");
array.unshift(99)
console.log(array);
console.log("****************************** replace element to middle index***********************************");
array.splice(6,1,66)
console.log(array);
console.log("************************************* find element 5**********************************************");
var find=array.includes(5)
console.log(find);
console.log("****************************** remove lst element***********************************");
array.pop()
console.log(array);
console.log("****************************** array duplicate element***********************************");
const arrayOfNumbers = [1, 6, 5, 3, 11, 23, 4, 6, 3, 11 ]

var duplic=[...new Set(arrayOfNumbers)]
console.log(duplic);
console.log("****************************** array duplicate element***********************************");
namearray=["kamat","menon","nashpati","taimur","menon","kamat",'andy',"taimur"] 
var strdu=[...new Set(namearray)]
console.log(strdu);
console.log("****************************** array tricky program***********************************");
const arrayint = [ 1, 6, 5, 3, 11, 23, 4 ]
const arrayint2=[1,2,5,6,4,8,2,85,2,4]
var mergearr=arrayint.concat(arrayint2)
console.log(mergearr);
console.log("****************************** remove duplicate element***********************************");
var arrdupli=[...new Set(arrayint)]
console.log(arrdupli);
console.log("*******************************sum of all element***********************************");
var sum=0
arrayint.forEach(currentValue => {
    
    sum+=currentValue
       

});
console.log(`sum is ${sum}`);

console.log("*******************************sum of all element***********************************");

var multi=1
arrayint.forEach(i => {
    
    multi*=i
       

});
console.log(`multiplication is ${multi}`);
console.log("*******************************sort elemnt ascending order***********************************");
var asc=arrayint.sort((function(a, b){return a-b}));
console.log(asc);
console.log("*******************************sort elemnt descending order***********************************");
var dsc=arrayint.sort((function(a, b){return b-a}));
console.log(dsc);
console.log("*******************************second largest number***********************************");
let arraya=[1, 3, 4, 5,7,21, 6, 25, 24]

console.log(`second largest number is${[arraya[arraya.length-2]]}  if array sorted`);
console.log("***************************************another way**************************************");
let largenum=0
let selarge=0
for (let i = 0; i < arraya.length; i++) {
       if (largenum<arraya[i]) {
             selarge=largenum
             largenum=arraya[i]
       }
       if (selarge<arraya[i]&&largenum>arraya[i]) {
        selarge=arraya[i]
        
       }

}
console.log(selarge);


