'use strict'
let person={
    fullname:"mohit",
    age:23,
    city:"pune",
    pin:413314,
    state:"maharashtra",
    married:true
}
// let fullname=person.fullname
// let city=person.city
// let pin=person.pin
// let state=person.state
// let married=person.married

let {fullname,city,pin,state,married}=person
console.log(fullname,city,pin,state,married);


// array destrucring

let arrayOfNames = ["Monu", "Golu", "Chottu", "Ponu", "dholu"]
//  let ele0 =  arrayOfNames[0];
//  let ele1 =  arrayOfNames[1];
//  let ele2 =  arrayOfNames[2];
//  let ele3 =  arrayOfNames[3];
//  let ele4 =  arrayOfNames[4];
//  let ele5 =  arrayOfNames[5];
 let [ele0, ele1, ele2, ele3, ele4 ] = arrayOfNames;
 console.log(ele0, ele1, ele2, ele3, ele4);
