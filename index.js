//var tweet = prompt("Compose your tweet:");
//var tweetUnder140 = tweet.slice(0,140);
//alert(tweetUnder140);
//tweetUnder140.length;



//var name = prompt("What is your name?");
//var firstChar = name.slice(0,1);
//firstChar = firstChar.toUpperCase();
//var restOfName = name.slice(1,name.length)
//restOfName = rest.toLowerCase();
//var capitalisedName = firstChar + restOfname;
//alert("Hello, " + capitalisedName);

//dog age calculator
//var dogAge = prompt("How old is you dog?");
//var humanAge = ((dogAge -2)*4)+21;
//alert ("Your dog is " + humanAge + " years old in human age!");









/************function lifeInWeeks(age) {
    
    
    
    var yearsRemaning = 90 - age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning*12;

    console.log("You have " + days + "days, " + weeks+  " weeks, and "+ months+" months left.");  
}

lifeInWeeks(51);

************/



/***function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
 
  var change = startingAmount % costPerBottle

  return change;

}


console.log("Hello master, here is your " + getMilk(10, 3) + " change.");



****/

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/


//random diceroll
/***
var n = Math.random();
n = Math.floor(n*6)+1;
console.log(n);
***/

//love calculator

/**
var yourName = prompt("What is your name?")
var otherName = prompt("What is your intrests name?")

var percent = Math.random();
percent = Math.floor(percent*100)+1;

if (percent > 70) {
  alert("Your love score is " + percent + "%." + "You love eachother as much as I love pizza.");
} 
if (percent > 30 && percent <= 70){
  alert("Your love score is " + percent + "%.")
}

if (percent <= 30){
  alert("Your love score is " + percent + "%." + " You g otogether like oil and water.")
}



else {
   alert(yourName + " and " + otherName + "have a " + percent + "% match rate.");
  }

**/

/**
function bmiCalculator (weight, height) {


  var bmi = weight / Math.pow(height, 2);

  if (bmi < 18.5){
    interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
  }

  if (bmi > 18.5 && bmi < 24.9){
    interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
  }

  if (bmi > 24.9){
    interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
  }

    return interpretation;
}

bmiCalculator(60, 2);
**/


//leap year calc
/** function isLeap(year) {
    
 var shouldLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
 
 if (shouldLeapYear) {
     return "Leap year.";
 }
 return "Not leap year.";
 
}

isLeap(1948);
**/




/**
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var checkName = prompt("What is your name?")


if (guestList.includes(checkName)) {
  alert("You are on the list");
}
else {
  alert("You are not on  the list");
}
**/

//fizzBuzz
/**
var output = [];
var count = 1;

function fizzBuzz() {

  while(count <= 100) {

  var isModuloBoth = count % 3 === 0 && count % 5 === 0;
  var isModulo3 = count % 3 === 0;
  var isModulo5 = count % 5 === 0;

    if (isModuloBoth){
      output.push("FizzBuzz");
     }
    else if (isModulo3) {
       output.push("Fizz");    
    }
    else if (isModulo5){
       output.push("Buzz");    
    }
    else {
       output.push(count);   
    }
      count++;
  }  

  console.log(output);
}

fizzBuzz();
**/


/**
function whosPaying(names) {
      
    
    var numberOfPeople = names.length;
    var randomPersonPositioning = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPositioning];
 

    return (randomPerson + " is going to buy lunch today!");
}
**/

/**
function bottlesOfBeer() {

  var bottlesCount = 99;
  var bottlesMinus1 = 98;

  while(bottlesCount >= 1) {
    console.log( bottlesCount + " bottles of beer on the wall, " + bottlesCount +  " bottles of beer. Take one down and pass it around, " 
    +  bottlesMinus1 + " bottles of beer on the wall.");

    bottlesCount--;
    bottlesMinus1--;
    
  }


  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

}
**/

/**
var output = [];


function fizzBuzz() {

  for(var count = 1; count < 101;  count++) {

  var isModuloBoth = count % 3 === 0 && count % 5 === 0;
  var isModulo3 = count % 3 === 0;
  var isModulo5 = count % 5 === 0;
 
    if (isModuloBoth){
      output.push("FizzBuzz");
      continue;
    }
    if (isModulo3) {
       output.push("Fizz");
       continue;    
    }
    if (isModulo5){
       output.push("Buzz"); 
       continue;   
    }
     
       output.push(count);   
      
  }  

  console.log(output);
}

fizzBuzz();
**/
/**
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    

 
    var output = [];
  
    if (n === 1){
      output=[0];    
    }
    else if (n === 2){
      output= [0,1];
    }

   else {
     output = [0,1]

     for(var i = 2; i < n; i++) {
       output.push(output[output.length - 2] + output[output.length - 1]);
     }
     

   }

   return output;
  
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator (8);
**/
/**
var randomNumberOne = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberOne);
**/

function add(num1, num2) {
return num1 + num2;
}
 
function subtract(num1, num2) {
return num1 - num2;
}
 
function multiply(num1, num2) {
return num1 * num2;
}
 
function divide(num1, num2) {
return num1 / num2;
}
 
function calculator(num1, num2, operator) {
return operator(num1, num2);
}