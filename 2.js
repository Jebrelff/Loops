const str = 'LaunchCode';
const arr = [1, 5, 'LC101', 'blue', 42];

// 1. Print each element of the array to a new line.
console.log("Elements of the array:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. Print each character of the string—in reverse order—to a new line.
console.log("\nCharacters of the string in reverse order:");
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
