function calcAverage(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

let dolphinsAvg1 = calcAverage(dolphinsScores1);
let koalasAvg1 = calcAverage(koalasScores1);

console.log(`Điểm trung bình của Dolphins: ${dolphinsAvg1.toFixed(1)}`);
console.log(`Điểm trung bình của Koalas: ${koalasAvg1.toFixed(1)}`);

if (dolphinsAvg1 > koalasAvg1) {
    console.log("Dolphins giành cúp!");
} else if (koalasAvg1 > dolphinsAvg1) {
    console.log("Koalas giành cúp!");
} else {
    console.log("Hòa!");
}

let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

let dolphinsAvgBonus1 = calcAverage(dolphinsScoresBonus1);
let koalasAvgBonus1 = calcAverage(koalasScoresBonus1);

console.log(`Điểm trung bình của Dolphins: ${dolphinsAvgBonus1.toFixed(1)}`);
console.log(`Điểm trung bình của Koalas: ${koalasAvgBonus1.toFixed(1)}`);

if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
    console.log("Dolphins giành cúp!");
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
    console.log("Koalas giành cúp!");
} else {
    console.log("Không đội nào giành cúp!");
}

let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

let dolphinsAvgBonus2 = calcAverage(dolphinsScoresBonus2);
let koalasAvgBonus2 = calcAverage(koalasScoresBonus2);

console.log(`Điểm trung bình của Dolphins: ${dolphinsAvgBonus2.toFixed(1)}`);
console.log(`Điểm trung bình của Koalas: ${koalasAvgBonus2.toFixed(1)}`);

if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log("Dolphins giành cúp!");
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log("Koalas giành cúp!");
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log("Hòa!");
} else {
    console.log("Không đội nào giành cúp!");
}