// Para sorteio dos números.
let lotteryNumbers=[];
let firstGame = [10,25,33,45,55,59];

for (let index=0;index<6;index+=1){
    lotteryNumbers.push(Math.ceil(Math.random()*60));
}