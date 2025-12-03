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
