exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'milk', quantity: 2, unit: 'oz', recipe_id: 1},
        {id: 2, name: 'flour', quantity: 1, unit: 'g', recipe_id: 1},
        {id: 3, name: 'peas', quantity: 6, unit: 'ml', recipe_id: 2},
        {id: 4, name: 'beef', quantity: 18, unit: 'oz', recipe_id: 2},
        {id: 5, name: 'peppers', quantity: 10, unit: 'oz', recipe_id: 2},
        {id: 6, name: 'rice', quantity: 19, unit: 'ml', recipe_id: 2},
        {id: 7, name: 'lettuce', quantity: 8, unit: 'oz', recipe_id: 2},
        {id: 8, name: 'beans', quantity: 1, unit: 'oz', recipe_id: 3},
        {id: 9, name: 'sugar', quantity: 11, unit: 'g', recipe_id: 3},
        {id: 10, name: 'tomatoes', quantity: 52, unit: 'oz', recipe_id: 3}
      ]);
    });
};

