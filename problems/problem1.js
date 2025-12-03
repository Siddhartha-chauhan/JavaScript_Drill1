// Problem 1: Find the car with ID 33 and return its year, make, and model
// Expected output format: "Car 33 is a 2011 Jeep Wrangler"

import { inventory } from '../inventory.js';

function problem1(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == 33) {
            return `Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`;
        }
    }
}

export { problem1 };
