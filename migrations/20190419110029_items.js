exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('Items', function (table) {
      table.increments().primary()
      table.string('name')
      table.integer('user_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('Items')
  }
  