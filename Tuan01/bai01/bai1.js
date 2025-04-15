let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`BMI của Mark: ${markBMI1.toFixed(1)}`);
console.log(`BMI của John: ${johnBMI1.toFixed(1)}`);
console.log(`Mark có BMI cao hơn John: ${markHigherBMI1}`);