// Ejercicio 1 del módulo 3
/*
  Programa un ejemplo que almacene en un array todas las cartas de la baraja,
  cada una representada con un diccionario que tenga un palo y un valor
*/

var suits = ['c', 't', 'r', 'p'];
var totalCards = 52;
var cardsPerSuit = totalCards / suits.length;
var deck = [];

for (var i = 0; i < suits.length; i = i + 1) {
  for (var j = 1; j <= cardsPerSuit; j = j + 1) {
    var card = {
      number: j,
      suit: suits[i]
    };

    deck[deck.length] = card;
  }
}

console.log(deck);

// Ejercicio 2 del módulo 3
/* Partiendo del array que has construido en el ejercicio anterior, construye
un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro array
las cartas negras. */

var redSuits = ['c', 'r'];
var blackCards = [];
var redCards = [];

for (var i = 0; i < deck.length; i++) {
  var card = deck[i];
  var cardIsRed = card.suit === redSuits[0] || card.suit === redSuits[1];

  if (cardIsRed) {
    redCards[redCards.length] = card;
  } else {
    blackCards[blackCards.length] = card;
  }
}

console.log(redCards);
console.log(blackCards);

// Ejercicio 3 del módulo 3
/* Partiendo del array que has construido en el ejercicio anterior, construye un
 algoritmo que filtre en un nuevo array las cartas rojas y pares. Luego imprime
 en la consola la última carta de ese nuevo array. */

 var redSuits = ['c', 'r'];
var redEvenCards = [];

for (var i = 0; i < deck.length; i++) {
  var card = deck[i];
  var cardIsRed = card.suit === redSuits[0] || card.suit === redSuits[1];
  var cardIsEven = card.number % 2 === 0;

  if (cardIsRed && cardIsEven) {
    redEvenCards[redEvenCards.length] = card;
  }
}

console.log(redEvenCards);
console.log(redEvenCards[redEvenCards.length - 1]);
