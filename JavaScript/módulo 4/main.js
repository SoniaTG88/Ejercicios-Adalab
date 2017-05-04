// Ejercicio 1 del módulo 4
/* 1. Desarrolla una función que puntúe una mano de cartas, que tenga como
parámetro un array de cartas, cada una representada por un diccionario con palo
y valor. Al puntuar, las cartas suman su valor excepto si es un as que suma 20.
Prueba a invocarla con varias manos de cartas con y sin ases.
*/

unction isAce(card) {
  var result = card.number === 1;

  return result;
}

function calculateScore(hand) {
  var score = 0;

  for (var i = 0; i < hand.length; i = i + 1) {
    var card = hand[i];
    var cardScore = card.number;

    if (isAce(card)) {
      cardScore = 20;
    }

    score = score + cardScore;
  }

  return score;
}

var hand1 = [
  {
    number: 1,
    suit: "c"
  },
  {
    number: 4,
    suit: "r"
  },
  {
    number: 9,
    suit: "t"
  },
  {
    number: 12,
    suit: "p"
  },
];

var hand2 = [
  {
    number: 7,
    suit: "c"
  },
  {
    number: 2,
    suit: "c"
  },
  {
    number: 8,
    suit: "p"
  },
  {
    number: 10,
    suit: "p"
  },
];

var hand3 = [
  {
    number: 8,
    suit: "c"
  },
  {
    number: 1,
    suit: "c"
  },
  {
    number: 8,
    suit: "p"
  },
  {
    number: 1,
    suit: "p"
  },
];

var score1 = calculateScore(hand1);
console.log(score1);

var score2 = calculateScore(hand2);
console.log(score2);

var score3 = calculateScore(hand3);
console.log(score3);

// Ejercicio 2 módulo 4
/*
  Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro
  un array de cartas, cada una representada por un diccionario con palo y valor.

  Al puntuar, las cartas suman su valor excepto si es un as que suma 20. Prueba
  a invocarla con varias manos de cartas con y sin ases.
*/

function isRed(card) {
  var redSuits = ['c', 'r'];
  var result = card.suit === redSuits[0] || card.suit === redSuits[1];

  return result;
}

function isAce(card) {
  var result = card.number === 1;

  return result;
}

function calculateScore(hand) {
  var score = 0;

  for (var i = 0; i < hand.length; i = i + 1) {
    var card = hand[i];
    var cardScore = hand[i].number;

    if (isAce(card)) {
      cardScore = 20;
    }

    if (isRed(card)) {
      cardScore = cardScore * 2;
    }

    score = score + cardScore;
  }

  return score;
}

var hand1 = [
  {
    number: 1,
    suit: "c"
  },
  {
    number: 4,
    suit: "r"
  },
  {
    number: 9,
    suit: "t"
  },
  {
    number: 12,
    suit: "p"
  },
];

var hand2 = [
  {
    number: 7,
    suit: "c"
  },
  {
    number: 2,
    suit: "c"
  },
  {
    number: 8,
    suit: "p"
  },
  {
    number: 10,
    suit: "p"
  },
];

var hand3 = [
  {
    number: 8,
    suit: "c"
  },
  {
    number: 1,
    suit: "c"
  },
  {
    number: 8,
    suit: "p"
  },
  {
    number: 1,
    suit: "p"
  },
];

var score1 = calculateScore(hand1);
console.log(score1);

var score2 = calculateScore(hand2);
console.log(score2);

var score3 = calculateScore(hand3);
console.log(score3);

// Ejercicio 3 módulo 4
/*
  Desarrolla un programa que use la función del ejercicio 2 de este módulo para
  puntuar las manos de cartas de dos jugadores e imprima por consola al ganador,
  es decir, al que obtenga mayor puntuación.
*/

function calculateScore(hand) {
  var score = 0;
  var redSuits = ['r', 'c'];

  for (var i = 0; i < hand.length; i = i + 1) {
    var card = hand[i];
    var cardScore = card.number;
    var cardIsAce = card.number === 1;
    var cardIsRed = card.suit === redSuits[0] || card.suit === redSuits[1];

    if (cardIsAce) {
      cardScore = 20;
    }

    if (cardIsRed) {
      cardScore = cardScore * 2;
    }

    score = score + cardScore;
  }

  return score;
}

function getWinner(player1, player2) {
  var firstHandScore = calculateScore(player1.hand);
  var secondHandScore = calculateScore(player2.hand);

  if (firstHandScore > secondHandScore) {
    return player1;
  } else {
    return player2;
  }
}

var firstPlayer = {
  name: 'Laura',
  hand: [
    {
      number: 1,
      suit: "c"
    },
    {
      number: 4,
      suit: "r"
    },
    {
      number: 9,
      suit: "t"
    },
    {
      number: 12,
      suit: "p"
    },
  ]
};

var secondPlayer = {
  name: 'Diego',
  hand: [
    {
      number: 7,
      suit: "c"
    },
    {
      number: 2,
      suit: "c"
    },
    {
      number: 8,
      suit: "p"
    },
    {
      number: 10,
      suit: "p"
    },
  ]
};

var winner = getWinner(firstPlayer, secondPlayer);
console.log('La mano ganadora es la de ' + winner.name);
