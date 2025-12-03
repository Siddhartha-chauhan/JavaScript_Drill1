// Problem 2: Find the last car in the inventory and return its make and model
// Expected output format: "Last car is a Lincoln Town Car"

import { inventory } from '../inventory.js';

function problem2(inventory) {
    let lastIndex = inventory.length - 1;
    return `Last car is a ${inventory[lastIndex].car_make} ${inventory[lastIndex].car_model}`;
}

export { problem2 };
