

var myNumber1;
var myNumber2;
// var myNumber3;


var calculation = prompt ("Normal or Advance");
if (calculation =="Normal") {
  var Normal = prompt ("Which type of normal calculation will you use");
  myNumber1 =parseInt(prompt("The First number"));
  myNumber2 = parseInt(prompt("The second number"));
 if (Normal == "+") {
   console.log(myNumber1 + myNumber2);
 } else if (Normal == "/") {
   console.log(myNumber1 / myNumber2);
 }else if (Normal == "-") {
   console.log(myNumber1 - myNumber2);
 }else if (Normal == "%") {
   console.log(myNumber1 % myNumber2);
 }else if (Normal == "*") {
   console.log(myNumber1 * myNumber2);
 }
}
//This below is my try at an Advance calculator,
else if (calculation == "advance") {
  var advance = prompt ("What type Advance calculation");
 if (advance == "power") {
   myNumber3 =parseInt(prompt("Number 1"));
   myNumber4 = parseInt(prompt("Number 2"));
   console.log("The Power of:" + Math.pow(myNumber3, myNumber4));
 } else if (advance == "Squareroot") {
   myNumber3 =parseInt(prompt("Number 1"));
   console.log( "The Squareroot is " + Math.sqrt(myNumber3));
 }
}
