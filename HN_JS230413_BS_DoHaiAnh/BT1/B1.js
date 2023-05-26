const findBigNumber = [3, 89, 20, 55, 1, 88, 67, 6];
let maxElement = findBigNumber[0];

for (let i = 1; i < findBigNumber.length; i++) {
    if (findBigNumber[i] > maxElement) {
        maxElement = findBigNumber[i];
    }
}

console.log(maxElement);
