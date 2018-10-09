

var myNumber1;
var myNumber2;
// var myNumber3;



var calculation = prompt ("Normal or Advance");
if (calculation =="Normal")
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

//This below is my try at an Advance calculator,


  // if (calculation == "advance")
  //   var advance = prompt ("What type Advance calculation");
  //   myNumber1 =parseInt(prompt("Intro the first number"));
  //   myNumber2 = parseInt(prompt("Intro the second number"));
  //      if (advance == "power") {
  //        console.log(myNumber3 / myNumber4);
  //      }
