// Problem 6: Get only BMW and Audi cars from the inventory
// Expected output: Array of BMW and Audi car objects (use JSON.stringify to view)

import { inventory } from '../inventory.js';

function problem6(inventory) {
    let BMWAndAudi = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
            BMWAndAudi.push(inventory[i]);
        }
    }

    return BMWAndAudi;
}

export { problem6 };
