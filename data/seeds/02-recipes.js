exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {name: 'homemade', dish_id: 1},
        {name: 'homemade', dish_id: 2},
        {name: 'bbq-style', dish_id: 2},
        {name: 'sticky', dish_id: 2},
        {name: 'spicy', dish_id: 3},
        {name: 'chinese-style', dish_id: 3}
      ]);
    });
};