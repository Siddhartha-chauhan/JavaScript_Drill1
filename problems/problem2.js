import { inventory } from '../inventory.js';

function problem2(inventory) {
    let lastIndex = inventory.length - 1;
    return `Last car is a ${inventory[lastIndex].car_make} ${inventory[lastIndex].car_model}`;
}

export { problem2 };