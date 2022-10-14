var string= function stringHandOn(){
   var givenString="    hey you are doing good keep it up   "
    console.log("**********************1*******************************");
    console.log("    hey you are doing good keep it up   ");
    console.log("**********************2*******************************");
    console.log(`lentth of string:${givenString.length}`);
    console.log("**********************3*******************************");
    console.log(`string after removing extra spaces:${givenString.trim()}`);
    console.log("**********************4*******************************");
    var trimResult=givenString.trim()
    console.log(`removed extra spaces:${givenString.length-trimResult.length}`);
    console.log("**********************5*******************************");
    console.log(`after trim first char:${trimResult.charAt(0)}`);
    console.log(`trim after last char:${trimResult.charAt(trimResult.length-1)}`);
    console.log("**********************6*******************************");
    var splitResult=trimResult.split(" ")
    console.log(splitResult);
    console.log("total word in strong",splitResult.length);
    console.log("**********************7*******************************");
    console.log(`inedex of word good :${givenString.indexOf("good")}`);
    console.log("**********************8*******************************");
    console.log(`using substring${trimResult.substring(22)}`);
    console.log(`using slice${trimResult.slice(22)}`);
    console.log("**********************9*******************************");
    console.log(`end word:${trimResult.endsWith("up")}`);
    console.log("**********************10*******************************");
    console.log(`start with:${trimResult.startsWith("hey")}`);


    console.log("my fav dream company is google");

    console.log("*************my hobby************");
    var hobby1="cricket"
    var hobby2="travlling"
    var hobby3="driving"

    console.log("**********my hobby******");
    console.log(`hobby 1:${hobby1}`);
    

    

}
string()