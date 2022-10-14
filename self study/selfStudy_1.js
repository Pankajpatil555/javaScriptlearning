const time=function(time){
    var greet="good morning";
    
    if (time>18){
        var replacedemo=greet.replace("morning","evining")
       
        console.log(replacedemo);
        


    }
    else{
        console.log(greet);
    }
    
}
console.log(time(22));


console.log("==============trim()===============");
var greet = " Good Morning bro and sis";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);