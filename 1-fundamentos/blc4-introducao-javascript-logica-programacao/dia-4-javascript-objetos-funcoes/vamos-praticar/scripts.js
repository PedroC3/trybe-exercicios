//Vamos praticar

//Objetos


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima

// console.log('Boas vindas ' + info.personagem + '!');

// //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console

info.recorrente = 'Sim'

// console.log(info);

// //3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (let keys in info) {
//   console.log(keys);
// }

// //4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for (let keys in info) {
//   console.log(info[keys]);
// }

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let keys in info) {
  if (info[keys] === infoPatinhas[keys]) {
    console.log('Ambos ' + keys);
  } else {
    console.log(info[keys] + ' e ' + infoPatinhas[keys]);
  }
}

//6 Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorita de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

//7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
},
)

console.log(leitor);

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".


console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);

//Funções

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrome(word) {
  let palindromeTeste = word.split("").reverse("").join("")
  if (word === palindromeTeste) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(palindrome('araraaaa'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let integers = [17, 1, 3, 3, 4, 5]

function checkHighNumber(array) {
  let highIndex = 0
  for (let index in array) {
    if (array[highIndex] < array[index]) {
      highIndex = index
    }
  }
  return highIndex
}

console.log(checkHighNumber(integers));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let integers = [17, 1, 3, 3, 4, -5]

function checkSmallestNumber(array) {
  let smallestIndex = 0
  for (let index in array) {
    if (array[smallestIndex] > array[index]) {
      smallestIndex = index
    }
  }
  return smallestIndex
}

console.log(checkSmallestNumber(integers));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Araraquara'];

function highNameInArrayCheck(array) {
  let highIndex = 0;
  for (let index in array) {
    if (array[highIndex].length < array[index].length) {
      highIndex = index
    }
  }
  return array[highIndex]
}

console.log(highNameInArrayCheck(arrayTest));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [1, 3, 3, 1, 3]

function numberMostRepeat(array) {
  let currentMostRepeat = ''
  let repeatCont = ''
  let indexMostRepeat = ''

  for (let index in array) {
    for (let indexRepeat in array) {
      if (array[index] === array[indexRepeat]) {
        repeatCont += 1
      }
    }
    if (repeatCont > currentMostRepeat) {
      currentMostRepeat = repeatCont
      indexMostRepeat = array[index]
    }
    repeatCont = 0
  }
  return array[indexMostRepeat]
}

console.log(numberMostRepeat(numbers));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumGauss(number) {
  let currentCont = 0

  for (let index = number; index > 0; index -= 1) {
    currentCont = currentCont + index
  }
  return currentCont
}

console.log(sumGauss(100));

//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function wordFinalCheck (word, ending) {
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      return false
    }
  }
  return true
}

console.log(wordFinalCheck('Pedro', 'dro'));