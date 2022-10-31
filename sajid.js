let teacher = {
    "first name": "Sajid",
    "last name": "Tamboli",
    "age": "28",
    "city": "sangola",
    "Profession": "Lecturer",
    degree: {
        Engineering: "CSC",
        phd: "Adv Computig",
        certificate: {
            certificates1: " Hacker Rank parrticipation",
            certificates2: " certificates in IFE course",
            certificates3: "certificates in adv  programming",
        },
     
    },
     concat:function() {
        
        let allDegree =this.degree.Engineering+" "+ this.degree.phd
        console.log(allDegree);

    }

}
console.table(teacher);
console.log("Nested degree");
console.table(teacher.degree);
console.log("Nested degree");
console.table(teacher.degree.certificate);
console.log("==========");
teacher.concat()