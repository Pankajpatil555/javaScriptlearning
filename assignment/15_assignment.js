const array_num=[1,-7,40,502,-77,91,0,108,89,-601]
array_num.forEach(function (currentValue,index) {
   console.log(`element is: ${currentValue} index is: ${index}`); 
});
console.log("*****************************************************************");
 array_num.forEach(function(currentValue){
    if (currentValue>0) {
   
   console.log(`positive number :${currentValue}` );
        
    }
 })
 console.log("****************************************************************");
 array_num.forEach(currentValue => {
    if (currentValue<0) {
        console.log(`negative number: ${currentValue} `);
    }
});
console.log("*****************************************************************");
array_num.forEach(currentValue => {
    if (currentValue%2==0) {
        console.log(`even number: ${currentValue} `);
    }
});
console.log("*****************************************************************");
var sum=0
array_num.forEach(currentValue => {
    
    sum+=currentValue
       

});
console.log(`sum is ${sum}`);
console.log("*************************************************************");
array_num.forEach(function (currentValue,index) {
    if (index%2==0) {
       
    console.log(`element is: ${currentValue} position  is: ${index}`);  
    }
   
 });
 console.log("*************************************************************");
 array_num.forEach(function (currentValue,index) {
    if (index%2!=0&&currentValue<0) {
       
    console.log(`element is: ${currentValue} position  is: ${index}`);  
    }
   
 });