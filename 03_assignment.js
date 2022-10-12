const square =function(side){
    return side*side
}
console.log("square of side");
console.log(square(5));
console.log("************************************");
console.log(square(6));
console.log("************************************");
console.log(square(25));
console.log("************************************");


const areaofTringle=function(height,base){
    return height*base/2
}
console.log(" area of tringle ");
console.log(areaofTringle(25,30));
console.log("************************************");

const areaofReactngle=function(length,width)
{
return length*width
 
}
console.log("area of rectangle");
console.log(areaofReactngle(25,36));

 const swap_values=function(arg1,arg2){
    console.log("---------------*before swap*-----------------");
    console.log(arg1,arg2);
    console.log("*--------------*after swap*------------------*");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_values("sachin","anjali")



