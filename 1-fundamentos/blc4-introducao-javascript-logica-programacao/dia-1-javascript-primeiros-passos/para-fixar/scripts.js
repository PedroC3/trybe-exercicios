// Exercicio de variáveis

const myName = "Pedro Costa"
const birthCity = "Petrolina"
let birthYear = 2030

// birthCity = "São Paulo"

// console.log (myName)
// console.log (birthCity)
// console.log (birthYear)

// Exercicio de tipos primitivos

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// console.log(typeof patientId)

// Exercicio de operadores artmeticos

const base = 5
const height = 8
const area = base * height
const perimeter = (2*base) + (2*height)

// console.log (area)
// console.log (perimeter)

// Exercicio if/else

const notaPessoa1 = 5;

if (notaPessoa1 >= 80) {
  console.log("Parabéns, você foi aprovada(o)!")
} else if (notaPessoa1 < 80 && notaPessoa1 >= 60) {
  console.log("Você está na nossa lista de espera")
} else if (notaPessoa1 < 60) {
  console.log("Você foi reprovada(o)")
}

// Exercicio operadores lógicos

// operador &&

const currentHour = 4;
let mensage = ""

if (currentHour >= 22) {
  mensage = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  mensage = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  mensage = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  mensage = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  mensage = "Hmmm, cheiro de café recém passado";
}

console.log(mensage);

// operador OR (||)

const weekDay = "quarta-feira"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log ("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

// switch case - não concluído

// let candidatx = "";
// const notaPessoa = 64;

// switch (notaPessoa) {
//   case >= 80:
//     candidatx = 'Aprovado'
//     break;

//   case >= 60 && < 80:
//     candidatx = 'Lista'
//     break;

//   case < 60:
//     candidatx = 'Aprovado'
//     break;

//   // default:
//   //   console.log('não se aplica');
// }

// console.log(candidatx);