// 'use strict'

// function display(name,...myname){
//     console.log(myname);
//     console.log(typeof myname);
// }
// display("anil",21,6,25)





'use strict'

function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);


// functional default parameter
function divide(x, y=1){
    console.log(x/y);
}
divide(10);
