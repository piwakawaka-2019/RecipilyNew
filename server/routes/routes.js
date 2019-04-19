const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/getItems', async (req, res) => {

    const userID = req.body;

    try{
        const items = await db.getItems(userID);
        res.json(items)
    }
    catch(err){console.log('err: ', err)}
})

router.post('/addItem', async (req, res) => { 

    const data = req.body;

    try{
        const id = await db.addItem(data)
        const newItem = await db.getItem(id[0]);
        res.json(newItem)
    }
    catch(err){console.log('err: ', err)}

})

router.put('/updateData', async (req, res) => {
    let updatedData = req.body
    try{
        // await db.updateData(updatedData)
        // const newData = await db.getData(id[0]);
        // res.json(newData)
    }
    catch(err){console.log('err: ', err)}
})

router.delete('/deleteData/:id', async (req, res) => {
    const id = req.params.id
    
    try{
        //await db.deleteData(id);
        //res.sendStatus(200);
    }
    catch(err){console.log('err: ', err)}
});



module.exports = router
