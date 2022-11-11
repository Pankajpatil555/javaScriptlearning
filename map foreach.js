// console.log("===== Traversing map using forEach() =====");
// let map = new Map();
// map.set(22, "Sachin");
// map.set(11, "Dravid");
// map.set(33, "Gaungully");
// map.set(77, "Dravid");
// map.forEach( (key, value) => {
//     console.log(key, value);
// } );




const arrayofnum=[2,3,5,6,4,8,9]
const newarray=arrayofnum.map((element,index)=>{
    return element+5
})
console.log(newarray);
console.log(arrayofnum);