const age = [12 , 13, 14, 15, 17];
const age2 = [13, 18, 17,21,19];
const allAges = [...age, ...age2];
console.log(allAges);
const maximum = Math.max(...allAges);
console.log(maximum);