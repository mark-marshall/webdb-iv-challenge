exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'homemade', dish_id: 1},
        {id: 2, name: 'homemade', dish_id: 2},
        {id: 3, name: 'bbq-style', dish_id: 2},
        {id: 4, name: 'sticky', dish_id: 2},
        {id: 5, name: 'spicy', dish_id: 3},
        {id: 6, name: 'chinese-style', dish_id: 3}
      ]);
    });
};