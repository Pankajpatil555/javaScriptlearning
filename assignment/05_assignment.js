console.log("********************************************************");
const wordLengthSquare = function (word) {
    var wordlenght = word.length
    console.log(`square of lenth ${wordlenght * wordlenght}`);

}
wordLengthSquare("javascript")
wordLengthSquare("google")
wordLengthSquare("developer")
console.log("********************************************************");

const gstring = function () {
    var givenstring = "i m angular developer"
    var wlenth = givenstring.length
    console.log(`string length:${wlenth}`);

      var word = givenstring.split(" ")
    total_word = word.length
    console.log(`total word:${total_word}`);

    console.log(`string lenth divided by total word:${wlenth / total_word}`);
    
    console.log("********************************************************");

    console.log(`string lenth multiply  by total word:${wlenth * total_word}`);

}

gstring()

















console.log("********************************************************");

const grater_num = function (num1, num2) {
    if (num1 > num2) {
        console.log(`grater number is:${num1}`);
    }
    else {
        console.log(`grater number is:${num2}`);
    }
}
grater_num(10, -10)
grater_num(800, 899)

console.log("********************************************************");

const oddEven = function (num1) {
    var result = num1 % 2

    console.log(`${num1}---->`, result == 0);
}
oddEven(29)
oddEven(44)
oddEven(101)
oddEven(0)

console.log("********************************************************");
const Strlength = function (word1) {

    var result = word1.length % 2

    if (result == 0) {
        console.log("EVEN");
    }
    else {
        console.log("ODD");
    }

}
Strlength("javascript")
Strlength("developer")
Strlength("google")




