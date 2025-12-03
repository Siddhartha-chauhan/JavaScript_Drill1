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
