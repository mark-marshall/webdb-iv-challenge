exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(function () {
      return knex('dishes').insert([
        {name: 'pizza'},
        {name: 'pasta'},
        {name: 'tacos'}
      ]);
    });
};
