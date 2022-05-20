let queenRowPosition = 4;
let queenColumPosition = 4;

let oponentRow = 2;
let oponentColum = 6;

if (queenRowPosition === oponentRow && queenColumPosition === oponentColum) {
  console.log('Peças na mesma posição');

} else if (((queenRowPosition - oponentRow) < 0 && (queenRowPosition - oponentRow) * (-1)) === (queenColumPosition - oponentColum)) {
  console.log('Ataque na diagonal superior esquerda');

} else if ((queenRowPosition - oponentRow) < 0 && (queenRowPosition - oponentRow) === (queenColumPosition - oponentColum)) {
  console.log('Ataque na diagonal superior direita');

} else if ((queenRowPosition - oponentRow) === (queenColumPosition - oponentColum)) {
  console.log('Ataque na diagonal inferior esquerda');

} else if ((queenRowPosition - oponentRow) === (queenColumPosition - oponentColum) * (-1)) {
  console.log('Ataque na diagonal inferior direita');

} else if (queenRowPosition === oponentRow || queenColumPosition === oponentColum) {
  console.log('Ataque em linha reta');

} else {
  console.log('Fora da área de ataque');
}