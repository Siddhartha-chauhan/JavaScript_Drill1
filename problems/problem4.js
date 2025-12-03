// Problem 4: Extract all car years from the inventory
// Expected output: Array of car years


import { inventory } from '../inventory.js';

function problem4(inventory) {
    let years = [];

    for (let i = 0; i < inventory.length; i++) {
        years.push(inventory[i].car_year);
    }

    return years;
}

export { problem4 };
