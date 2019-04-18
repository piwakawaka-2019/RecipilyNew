
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Items').del()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, name: 'Chicken', user_id: 3},
        {id: 2, name: 'Thyme', user_id: 2},
        {id: 3, name: 'Onion', user_id: 1}
      ]);
    });
};
