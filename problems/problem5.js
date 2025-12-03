// Problem 5: Find cars older than the year 2000 and count them
// Expected output: Array of cars made before 2000, and its length


import { inventory } from '../inventory.js';

function problem5(inventory) {
    let olderCars = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < 2000) {
            olderCars.push(inventory[i]);
        }
    }

    return olderCars;
}

export { problem5 };
