const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true
}
const pankaPerson =  {
    fullName: "pamakj patil",
    age: 22,
    "isMarried": true
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}