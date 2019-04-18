exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('Users', function (table) {
      table.increments().primary()
      table.string('name')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('Users')
  }
  