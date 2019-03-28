exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(function () {
      return knex('dishes').insert([
        {id: 1, name: 'pizza'},
        {id: 2, name: 'pasta'},
        {id: 3, name: 'tacos'}
      ]);
    });
};
