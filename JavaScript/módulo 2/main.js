// Ejercicio 1

var targetNumber = "4";
var targetSuit = "c";

var target = {
  number: "4",
  suit: "c"
};

var card = "4c";
var suit = card[1];
var number = card[0];

if (number === target.number && suit === target.suit) {
  console.log ("Es un 3 de corazones");
} else if (card[0] === "1" && card[1] === "3" && card[2] === "c") {
  console.log ( "es un rey de corazones") ;
} else if (card[0] === target.number && card[1] === target.suit){
  console.log ( "es un cuatro de corazones");
}

//Ejercicio 2

var leapYearInterval = 4;
var lastYear = 2050;
var currentYear = 2017;
var YearSinceLastLeapYear = currentYear % leapYearInterval;
var yearsUntilNextLeapYear = leapYearInterval - YearSinceLastLeapYear;
var nextLeapYear = currentYear + yearsUntilNextLeapYear;


for (var i = nextLeapYear; i < lastYear; i = i + leapYearInterval) {
        console.log (i + " es un año bisiesto antes del 2050");
      }

//Ejercicio 3


      var sticks = 4
      var redSticks = 2
      var totalCards = card * sticks / redSticks
