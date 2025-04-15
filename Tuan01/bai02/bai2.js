let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`BMI của Mark: ${markBMI2.toFixed(1)}`);
console.log(`BMI của John: ${johnBMI2.toFixed(1)}`);
console.log(`Mark có BMI cao hơn John: ${markHigherBMI2}`);


if (markBMI1 > johnBMI1) {
    console.log(`BMI của Mark (${markBMI1.toFixed(1)}) cao hơn của John (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`BMI của John (${johnBMI1.toFixed(1)}) cao hơn của Mark (${markBMI1.toFixed(1)})!`);
}

if (markBMI2 > johnBMI2) {
    console.log(`BMI của Mark (${markBMI2.toFixed(1)}) cao hơn của John (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`BMI của John (${johnBMI2.toFixed(1)}) cao hơn của Mark (${markBMI2.toFixed(1)})!`);
}