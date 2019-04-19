const config = require('../../knexfile').development
const database = require('knex')(config)

function getItems (userID, db = database) {
    return db('Items')
    .where('user_id', '=', userID)
    .select()

}

function addItem (data, db = database) {
    return db('Items')
    .insert(data)
}

function getItem(id, db = database) {
    return db('Items')
    .where('id', '=', id)
    .select()
    .first()
}

function updateData (updatedData, db = database) {
    return db('Table_Name')
    .where('id', '=', updatedData.id)
    .update({
        column_name_1: 'column 1 new data',
        column_name_2: new Date(Date.now)
    })
}

function deleteData (id, db = database) {
    return db('Table_Name')
    .where('id', '=', id)
    .del();
}

module.exports = {
    getItems,
    addItem,
    getItem,
    updateData,
    deleteData
}


