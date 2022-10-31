class Person{
    fullname
    city
    age
    gender
    constructor(myfullname,mycity,myage,mygender){
        this.fullname=myfullname
        this.city=mycity
        this.age=myage
        this.gender=mygender

    }
     details(){
        console.log(`${this.fullname} ${this.city} ${this.age} ${this.gender}`);

    }

}


// 


let p =new Person("sahin tendulakr","mumbai",45,"male")
let r =new Person("rohit","pune",32,"male")
console.log(p);
console.log(r);
details();










// class Student{
    //     constructor(rollno,sname){
    //         this.rollno=rollno
    //         this.sname=sname
    //     }
    // }
    
    // let s1=new Student(123,"pkl")
    // let s2=new Student(325,"sdw")
    
    // console.log(s1 instanceof Student);
    // console.log(s1.rollno,s1.sname);
