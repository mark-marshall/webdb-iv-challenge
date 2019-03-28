// - `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
// - `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

function getRecipes() {
  return db('recipes')
    .select('recipes.id', 'recipes.name as recipe_name', 'dishes.name as dish_name')
    .from('recipes')
    .innerJoin('dishes', 'recipes.dish_id', 'dishes.id');
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

module.exports = {
  getRecipes,
  addRecipe,
};
