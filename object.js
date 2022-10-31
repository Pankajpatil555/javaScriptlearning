let sachin={
    fullname:"pankaj patil",
    city:"pune",
    age:26,
    Ismarried:"no",
    address:{
        street:"abc ",
        pincode:546465,
        city:"mumbai ",


    
    },
    detail:function(){
        let pk= this.fullname+" "+this.city
       console.log(pk);
    },
    bark:function(){
        console.log(this.city);
        
       
    }
}
// sachin.address.landmark=" c "
// console.log(typeof sachin);
// console.table(sachin.address);
// console.log(sachin.address.city);








// // delete the property
// delete sachin.age

// // update the value
// sachin.fullname="pankaj vijay patil"
// console.log(sachin);



// // access the property
// let personfullname=sachin.fullname
// console.log(personfullname);
// console.log(sachin.city);

// // add properrty
// sachin.pincode=123456
// sachin.profesion="it engineer"

// console.table(sachin);
sachin.detail()
sachin.bark()
let isavai="fullname" in sachin
console.log(isavai);





