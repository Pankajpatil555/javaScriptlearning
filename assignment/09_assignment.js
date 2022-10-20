let teacher={
    firstname:"tejaswi",
    lastname:"patil",
    city:"mumbai",
    age:25,
    subject:"English",
    degree:{
        degreename:"BE computer",
        phd_topic:"adv. computing",
    },
    certificates:{
        certificate_one:"CEH V10",
        certificate_two:"CCNA",
        certificate_three:"Angular",
    },
     concat:function(){
        let pk=this.degree.degreename+" "+this.degree.phd_topic
        console.log(pk);

     }

    
}
console.table(teacher)
teacher.concat()
teacher.certificates.certificate_four="java"
console.table(teacher)
teacher.firstname="teju"
console.table(teacher)
delete teacher.certificates.certificate_three
console.table(teacher)
teacher.certificates.certificate_five="python"
console.table(teacher)
