// Exercicios Array loop For

// Exercicio 2 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercicio 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSum = 0;

for (let index = 0; index < numbers.length; index += 1) {
   numbersSum += numbers[index];
}

console.log(numbersSum);

// Exercicio 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numbersSum += numbers[index];
}

console.log(numbersSum/numbers.length);

// Exercicio 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numbersSum += numbers[index];
}

if ((numbersSum/numbers.length) > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// Exercicio 5 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMax = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
   if (numbers[index] > numberMax) {
     numberMax = numbers[index]
   }
}

console.log(numberMax);

// Exercicio 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numbersOdd += 1
  } 
}

if (numbersOdd > 0) {
  console.log(numbersOdd);
} else {
  console.log('Nenhum valor ímpar encontrado');
}

// Exercicio 7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMin = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
   if (numbers[index] < numberMin) {
     numberMin = numbers[index]
   }
}

console.log(numberMin);

// Exercicio 8 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push (index)
}

console.log(newArray);

// Exerccicio 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push (index)
}

for (let index = 0; index < newArray.length; index += 1) {
  console.log(newArray[index] / 2);
}

// Exercicios Bônus

// Ordene o array numbers em ordem crescente e imprima seus valores;

let arrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexNumber = 1; indexNumber < arrayNumbers.length; indexNumber += 1) {
  for (let secondIndex = 0; secondIndex < indexNumber; secondIndex += 1) {
    if (arrayNumbers[indexNumber] < arrayNumbers[secondIndex]) {
      let position = arrayNumbers[indexNumber];
      arrayNumbers[indexNumber] = arrayNumbers[secondIndex];
      arrayNumbers[secondIndex] = position;
    }
  }
}

console.log(arrayNumbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;

let arrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexNumber = 1; indexNumber < arrayNumbers.length; indexNumber += 1) {
  for (let secondIndex = 0; secondIndex < indexNumber; secondIndex += 1) {
    if (arrayNumbers[indexNumber] > arrayNumbers[secondIndex]) {
      let position = arrayNumbers[indexNumber];
      arrayNumbers[indexNumber] = arrayNumbers[secondIndex];
      arrayNumbers[secondIndex] = position;
    }
  }
}

console.log(arrayNumbers);

// Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte

let arrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayNumbersTwo = []

for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (index + 1 < arrayNumbers.length) {
      arrayNumbersTwo.push (arrayNumbers[index] * arrayNumbers[index + 1])
    } else {
      arrayNumbersTwo.push (arrayNumbers[index] * 2)
    }
}

console.log(arrayNumbersTwo);