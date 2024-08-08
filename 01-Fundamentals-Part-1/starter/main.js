// First data

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
