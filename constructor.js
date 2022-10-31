function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person.prototype.country="india"

let tend = new Person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(tend);

let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
console.log(sharma);

let riya = new Person("Riya", "satara", 35, "feMale");
console.log(riya);

let sona = new Person("sona", "Pen", 52, "female");
console.log(sona);


   