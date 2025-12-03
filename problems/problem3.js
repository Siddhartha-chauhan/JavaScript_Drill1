import { inventory } from '../inventory.js';

function problem3(inventory) {
    let models = [];

    for (let i = 0; i < inventory.length; i++) {
        models.push(inventory[i].car_model);
    }

    models.sort();

    return models;
}


export { problem3 };