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
    console.log(`No team wins`);
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
    console.log(`No team wins`);
  }
}
checkWinner2(dolphinsAverage, koalasAverage);

// #Coding Challenge 2
const calcTip = function (billvalue) {
  const tip =
    billvalue >= 50 && billvalue <= 300 ? billvalue * 0.15 : billvalue * 0.2;
  return tip;
};
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// Coding Challenge #3
// object 1
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  BMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(mark.BMI());

// object 2
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  BMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(john.BMI());

const higherBMI =
  mark.BMI > john.BMI
    ? `Mark Miller BMI (${mark.BMI}) is higher than John Smith BMI (${john.BMI})!`
    : `John Smith BMI (${john.BMI}) is higher than Mark Miller BMI (${mark.BMI})!`;
console.log(higherBMI);

// Coding challenge 4
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
total = [];
const calctip = function (billvalue) {
  const tip =
    billvalue >= 50 && billvalue <= 300 ? billvalue * 0.15 : billvalue * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(total);

let arr = [];
let sum = 0;
for (let i = 0; i < bills.length; i++) {
  sum += bills[i];
}
console.log(sum);
