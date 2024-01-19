// 1. Prompt the user to enter the starting fuel level.
let fuelLevel = prompt("Enter the starting fuel level (positive value greater than 5000 but less than 30000):");

while (!(fuelLevel > 5000 && fuelLevel < 30000)) {
    fuelLevel = prompt("Invalid input. Enter a positive value greater than 5000 but less than 30000:");
}

// 2. Query the user for the number of astronauts (up to a maximum of 7).
let numberOfAstronauts = prompt("Enter the number of astronauts (1 - 7):");

while (!(numberOfAstronauts >= 1 && numberOfAstronauts <= 7)) {
    numberOfAstronauts = prompt("Invalid input. Enter an integer from 1 - 7:");
}

// 3. Monitor the fuel status and altitude of the shuttle.
let altitude = 0;

while (fuelLevel >= numberOfAstronauts * 100) {
    // Decrease the fuel level by 100 units for each astronaut aboard
    fuelLevel -= numberOfAstronauts * 100;

    // Increase the altitude by 50 kilometers
    altitude += 50;
}

// Output the resultMessage after all the loops complete
let resultMessage;

if (altitude >= 2000) {
    resultMessage = `Orbit achieved! The shuttle gained an altitude of ${altitude} km.`;
} else {
    resultMessage = `Failed to reach orbit. The shuttle gained an altitude of ${altitude} km.`;
}

console.log(resultMessage);
