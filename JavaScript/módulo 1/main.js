// Ejercicio 1

var leapYearInterval = 4;
var currentYear = 2017;
var targetYear = 2050;
var yearBeforeTargetYear = targetYear - 1;

var yearInterval = yearBeforeTargetYear - currentYear;
var result = yearInterval / leapYearInterval;
console.log (result);

// Ejercicio 2

var cards = 55;
var jockerCards = 3;
var sticks = 4;
var blackSticks = 2;
var figuresPerSticks = 3;
var cardsPerSticks = (cards - jockerCards) / sticks;

var cardsWithNumberPerSticks = cardsPerSticks - figuresPerSticks;
var evenCardsPerSticks = cardsWithNumberPerSticks / 2;
var result = evenCardsPerSticks * blackSticks;
console.log (result);

// Ejercicio 3

var card = "3p";
var number = card [0];
var suit = card [1];
var previousCardNumber = number - 1;
var previousCard = previousCardNumber + suit;
console.log (previousCard);

var nextCardNumber = +number + 1;
var nextCard = nextCardNumber + suit;
console.log ("la siguiente carta a 3p es " + nextCard);

var all = previousCard + card + nextCard;
console.log ("la concatenación de la carta es " + all)
