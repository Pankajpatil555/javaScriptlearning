let arrayofNumber=[1,2,3,4,5,6,7,8,9]

console.log(arrayofNumber);
// console.log(arrayofNumber.includes(7));
// console.log(arrayofNumber.includes(11));
// console.log(arrayofNumber.indexOf(3));
arrayofNumber.unshift(12)
console.log(arrayofNumber);




for (let index = 0; index <arrayofNumber.length; index++) {
    const element = arrayofNumber[index];
    console.log(element);
    
}
for (const key in arrayofNumber) {
   
        const element = arrayofNumber[key];
        console.log(element);
        
    
}




let totalElements = arrayofNumber.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayofNumber[index];
    console.log(element);
    
}

let array=[11,22,47,81]
console.log(array);
array.shift()
console.log(array);
console.log("*****************splice***************");
let arrayNumber=[1,2,3,4,5,6,7,5,9]
 let sliced=arrayNumber.slice(2,8)
console.log(sliced);
console.log(arrayNumber);
arrayNumber.splice(5)
let pk=arrayNumber.splice(4, 1 ,55)
console.log(pk);
console.log(arrayNumber);


console.log('**********************************************');
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);
