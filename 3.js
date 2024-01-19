const values = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evens = [], odds = [];

// Loop through the numbersArray and fill evens and odds arrays
for (let i = 0; i < values.length; i++) {
    // if the number is even then push to evens array else push to odd arrays
    if (values[i] % 2 === 0) {
        evens.push(values[i]);
    } else {
        odds.push(values[i]);
    }
}

// Print the arrays
console.log("Evens array:", evens);
console.log("Odds array:", odds);
