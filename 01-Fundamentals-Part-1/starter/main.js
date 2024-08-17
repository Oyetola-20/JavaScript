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


// Coding Challenge 4