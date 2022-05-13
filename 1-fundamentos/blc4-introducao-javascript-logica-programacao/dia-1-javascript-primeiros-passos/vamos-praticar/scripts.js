//Exercicios

// // Exercicio 1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//Exercicio 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const Num1 = 13
const Num2 = 11

if (Num1 > Num2) {
  console.log(Num1);
} else {
  console.log(Num2)
};

//Exercicio 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const Num3 = 17
const Num4 = 19
const Num5 = 15

if (Num3 > Num4 && Num3 > Num5) {
  console.log(Num3);
} else if (Num4 > Num5) {
  console.log(Num4);
} else {
  console.log(Num5);
}

// Exercicio 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const Num6 = 10

if (Num6 > 0) {
  console.log('Positive');
} else if (Num6 < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}

// Exercicio 5 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angle1 = 30
const angle2 = 60
const angle3 = 190

let anglesSoma = angle1 + angle2 + angle3

let angleArePositives = angle1 > 0 && angle2 > 0 && angle3 > 0

if (angleArePositives){
  if (anglesSoma === 180) {
    console.log('true');
  } else console.log('false');
} else {
  console.log('Erro: Ângulo inválido');
}

// Exercicio 6 

//

// // Exercicio 7 Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 40;

if (nota < 0 || nota > 100) {
  console.log('Nota inválida');
} else if (nota >= 90) {
  console.log('A');
} else if (nota >= 80) {
  console.log('B');
} else if (nota >= 70) {
  console.log('C');
} else if (nota >= 60) {
  console.log('D');
} else if (nota >= 50) {
  console.log('E');
} else {
  console.log('F');
}


// Exercicio 8 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const num7 = 14
const num8 = 15
const num9 = 13

if (num7 % 2 == 0 || num8 % 2 == 0 || num9 % 2 == 0) {
  console.log('true');
} else {
  console.log(false);
}

// Exercicio 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const num10 = 14
const num11 = 15
const num12 = 16

if (num10 % 2 == 1 || num11 % 2 == 1 || num12 % 2 == 1) {
  console.log('true');
} else {
  console.log(false);
}

// Exercicio 10 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// - Atente que, sobre o custo do produto, incide um imposto de 20%.
// -  Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

const custo = 10
const custoTotal = custo * 1.2
const preco = custoTotal * 2
const lucro = preco - custoTotal

// if (custo <= 0) {
//   console.log('Dados de entrada inválidos');
// } else {
//   console.log(1000 * lucro);
// }

custo > 0 ? console.log(lucro * 1000) : console.log('Dados Inválidos');

// Exercicio 11 

let salarioBruto = 4000

let salarioBase = ''

let salarioLiquido = ''

let aliquotoa = 0.08
let aliquotaInss2 = 0.09
let aliquotaInss3 = 0.11
let aliquotaInss4 = 570.88

let aliquotaIr1 = 0
let aliquotaIr2 = 0.075
let aliquotaIr3 = 0.15
let aliquotaIr4 = 0.225
let aliquotaIr5 = 0.275

if (salarioBruto < 1556.94) {
  salarioBase = salarioBruto * (1 - aliquotaInss1)
} else if (salarioBruto < 2594.92) {
  salarioBase = salarioBruto * (1 - aliquotaInss2)
} else if (salarioBruto < 5189.82) {
  salarioBase = salarioBruto * (1 - aliquotaInss3)
} else {
  salarioBase = salarioBruto - aliquotaInss4
}

console.log(salarioBase);

if (salarioBase < 1903.98) {
  salarioLiquido = salarioBase
} else if ( salarioBase < 2826.65) {
  salarioLiquido = salarioBase * (1 - aliquotaIr2) + 142.80
} else if ( salarioBase < 3751.05) {
  salarioLiquido = salarioBase * (1 - aliquotaIr3) + 354.80
} else if ( salarioBase < 4664.68) {
  salarioLiquido = salarioBase * (1 - aliquotaIr4) + 636.13
} else if ( salarioBase > 4664.68) {
  salarioLiquido = salarioBase * (1 - aliquotaIr5) + 869.36
}

console.log(salarioLiquido);