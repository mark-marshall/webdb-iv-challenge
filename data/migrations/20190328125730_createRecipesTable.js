exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
  
        table.string('name', 128)
  
        table.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };