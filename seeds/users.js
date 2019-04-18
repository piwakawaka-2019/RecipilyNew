
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Jenna'},
        {id: 3, name: 'Katelyn'}
      ]);
    });
};
