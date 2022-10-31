const person={
    name:"pankaj",
    rollno:123,

}

person.street="as club"

console.log(person);




const array=[1,2,32,8,6,8]

Object.freeze(array) 
// array.push(55)
console.log(array);

const student = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone = Object.assign({}, student);// Deep cloning will be performed
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);
let mergeobj=Object.assign({},student,address)

console.log(mergeobj);
