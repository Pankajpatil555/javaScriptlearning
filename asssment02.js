

function name1(pk,pk2){
    console.log(pk+pk2);
}
name1("pankaj"," patil")


function swap_values(arg1,arg2){
    console.log("---------------*before swap*-----------------");
    console.log(arg1,arg2);
    console.log("*--------------*after swap*------------------*");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_values("sachin","anjali")



function addNumber(num1,num2,num3){
    console.log("**************--------------------------------");
    console.log(num1+num2+num3);

}
addNumber(10,20,30)
addNumber("hello","good","morning")