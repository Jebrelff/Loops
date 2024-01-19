// 1. Print the numbers 0 - 20, one number per line.
console.log("Numbers 0 - 20:");
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// 2. Print only the ODD values from 3 - 29, one number per line.
console.log("\nOdd values from 3 - 29:");
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

// 3. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
console.log("\nEven numbers from 12 to -14 in descending order:");
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

// 4. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
console.log("\nNumbers from 50 to 20 in descending order (multiples of 3 only):");
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}