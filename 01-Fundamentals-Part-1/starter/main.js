// Javascript Fundamental - Part 1
// Coding Challenge #1 and #2

let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`markBMI is higher than johnBMI`);
} else {
  console.log(`johnBMI is higher than markBMI`);
}

// Second data

markMass = 95;
johnMass = 85;

markHeight = 1.88;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`markBMI is higher than johnBMI`);
} else {
  console.log(`johnBMI is higher than markBMI`);
}


//Coding challenge 3

const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (89 + 91 + 110) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
  console.log(`Dolphins team win`);
}else if (koalasAverageScore > dolphinsAverageScore) {
  console.log(`Koalas team win`);
}else {
  console.log(`Draw`);
}

// Data bonus 1

const dolphinsAverageScore1 = (97 + 112 + 101) / 3;
const koalasAverageScore1 = (109 + 95 + 123) / 3;

if (dolphinsAverageScore1 > koalasAverageScore1 && dolphinsAverageScore1 >=100) {
  console.log(`Dolphins team win`);
}else if (koalasAverageScore1 > dolphinsAverageScore1 && koalasAverageScore1 >= 100){
  console.log(`Koalas team win`);
}else if (dolphinsAverageScore1 === koalasAverageScore1 && dolphinsAverageScore1 >=100 && koalasAverageScore1 >= 100){
  console.log(`Draw`);
}else{
  console.log(`No winner`)
}

// Data bonus 2

const dolphinsAverageScore2 = (97 + 112 + 101) / 3;
const koalasAverageScore2 = (109 + 95 + 106) / 3;

if (dolphinsAverageScore2 > koalasAverageScore2 && dolphinsAverageScore2 >= 100) {
  console.log(`Dolphins team win`);
}else if (koalasAverageScore2 > dolphinsAverageScore2 && koalasAverageScore2 >= 100){
  console.log(`Koalas team win`);
}else if (dolphinsAverageScore2 === koalasAverageScore2 && dolphinsAverageScore2 >=100 && koalasAverageScore2 >= 100){
  console.log(`Draw`);
}else{
  console.log(`No winner`);
}

//*Coding Challenge 4

// let billValue = 275;
// if (billValue >= 50 && billValue <= 300) {
//   tip = billValue * 0.15;
//   console.log(tip);
// }else {
//   tip = billValue * 0.2;
//   console.log(tip);
// }

let billValue = 275;
let tip = (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2;
console.log(tip);
console.log(`The bill was ${billValue}, the tip was ${tip} , and the total value is ${billValue + tip}.`);

// billValue = 40;
// if (billValue >= 50 && billValue <= 300) {
//   tip = billValue * 0.15;
//   console.log(tip);
// }else {
//   tip = billValue * 0.2;
//   console.log(tip);
// }

let billValue2 = 40;
tip = (billValue2 >= 50 && billValue2 <= 300) ? billValue2 * 0.15 : billValue2 * 0.2;
console.log(tip);
console.log(`The bill was ${billValue2}, the tip was ${tip} , and the total value is ${billValue2 + tip}.`);

// billValue = 430;
// if (billValue >= 50 && billValue <= 300) {
//   tip = billValue * 0.15;
//   console.log(tip);
// }else {
//   tip = billValue * 0.2;
//   console.log(tip);
// }

let billValue3 = 430;
tip = (billValue3 >= 50 && billValue3 <= 300) ? billValue3 * 0.15 : billValue3 * 0.2;
console.log(tip);
console.log(`The bill was ${billValue3}, the tip was ${tip} , and the total value is ${billValue3 + tip}.`);

// Javascript Fundamental - Part 2
// Coding challenge #1
// Data 1
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins`)
  }
}
checkWinner(dolphinsAverage, koalasAverage);

// Data 2
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);

function checkWinner2(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins`)
  }
}
checkWinner2(dolphinsAverage, koalasAverage);