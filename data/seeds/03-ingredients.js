exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'milk', quantity: 2, unit: 'oz', recipe_id: 1},
        {name: 'flour', quantity: 1, unit: 'g', recipe_id: 1},
        {name: 'peas', quantity: 6, unit: 'ml', recipe_id: 2},
        {name: 'beef', quantity: 18, unit: 'oz', recipe_id: 2},
        {name: 'peppers', quantity: 10, unit: 'oz', recipe_id: 2},
        {name: 'rice', quantity: 19, unit: 'ml', recipe_id: 2},
        {name: 'lettuce', quantity: 8, unit: 'oz', recipe_id: 2},
        {name: 'beans', quantity: 1, unit: 'oz', recipe_id: 3},
        {name: 'sugar', quantity: 11, unit: 'g', recipe_id: 3},
        {name: 'tomatoes', quantity: 52, unit: 'oz', recipe_id: 3}
      ]);
    });
};

