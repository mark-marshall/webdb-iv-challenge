exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
  
        table.string('name', 128)

        table.integer('quantity')

        table.string('unit', 128)
  
        table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };
