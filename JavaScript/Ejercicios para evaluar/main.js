// Ejercicio 1 para evaluar

var total = 0;
var number = 3;
var arrayNumbers = [3,4,5,7,3];

function cuentaNumbers (number, arrayNumbers) {
  for (i = 0; i<arrayNumbers.length; i++) {
    if (arrayNumbers [1] === number) {
      total = total + 1;
    }
  }
  return total;
}
cuentaNumbers (number, arrayNumbers)

// Ejercicio 2 para repasar

var cadena = "rural"

function centralCaracter (cadena) {
  if (cadena.length % 2 === 0) {
    return "solo funciono con cadenas impares";
  } else {
    return cadena [ (cadena.length - 1) / 2 ]     ]
  }
}
centralCaracter (cadena)

// Ejercicio 3 para repasar

var numbers = [2,1,4,5,89,69,2]
var pair = [];

function findPair (numbers) {
  for ( n = 0; n<numbers.length; n++) {
    if (numbers[n]%2 === 0) {
      pair.push(numbers[n])
    }
  }
  return pair;
}
findPair (numbers);
