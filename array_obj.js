// class person{
//     constructor(fullname,city,age,gender){
//         this.fullname=fullname;
//         this.city=city;
//         this.age=age
//         this.gender=gender
//     }
//     details(){
//         console.log(`person details:${this.fullname}  ${this.city} ${this.age} ${this.gender}`);
//     }
// }
// let personAnil=new person("anil ","pune",25,"male")
// let personanita=new person("anita","mumbai",22,"female")
// let personbill=new person("bill","mumbai",55,"male")
// const array1=[personAnil,personanita,personbill]

// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     console.log(`${element.fullname} ${element.city} ${element.age} ${element.gender}`);
    
// }
// console.log(details);

class Person {
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.age>=50) {
        console.log(` ${element.fullName}  ${element.city}  ${element.age} ${element.gender}  `);
    }
}
