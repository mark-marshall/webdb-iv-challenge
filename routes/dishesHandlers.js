// - `getDishes()`: should return a list of all dishes in the database.
// - `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
// - `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

function getDishes() {
  return db('dishes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

module.exports = {
  getDishes,
  addDish,
  getDish,
};
