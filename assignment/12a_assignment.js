let bank_sbi={
    branch_name:"pune",
    branch_code:"3738",
    branch_emp:12,
    brach_atm:2
}
let bank_location={
    street:"as club",
    city:"pune",
    pincode:"416114"
}
let rateofInterest={
    homeloneint:"13%",
    personalloanint:"7%",
    interstdue:"5%"

}

let mergeobj=Object.assign({},bank_sbi,bank_location)
let spreaded={...bank_sbi,...bank_location}
let sbi_details=Object.assign({},bank_sbi,bank_location,rateofInterest)

console.table(mergeobj);
console.log("**************************************************");
console.table(spreaded);
console.log("**************************************************");
console.table(sbi_details)
console.log("**************************************************");
for (let index = 0; index < sbi_details.length; index++) {
    const pk = sbi_details[index];
    console.log(pk);
    
}
