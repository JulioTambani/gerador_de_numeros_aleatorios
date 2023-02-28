// Para sorteio dos números.
let lotteryNumbers=[];
let firstGame = [10,25,33,45,55,59];

for (let index=0;index<6;index+=1){
    lotteryNumbers.push(Math.ceil(Math.random()*60));
}

// Coparação do sorteio com o meu jogo

let numberOfHits =0;
let hits=[];

for (let indexLottery=0; indexLottery<lotteryNumbers.length; indexLottery+=1){
    for (let indexGame=0; indexGame<firstGame.length; indexGame+=1){
        if (lotteryNumbers [indexLottery]=== firstGame[indexGame]){
            numberOfHits+=1;
            hits.push(lotteryNumbers[indexLottery]);
        }
    }
}

// Mostra os resultados

console.log('Números sorteados:', lotteryNumbers);
console.log('Jogos:',firstGame);
console.log('Quantidade de acertos:', numberOfHits);
console.log('Númeors acertados:', hits);