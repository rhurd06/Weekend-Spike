const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get the creatures from the DB
router.get('/', (req, res) => {
    console.log('In GET request');
    let queryText = 'SELECT * from creatures';

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) =>{
            console.log(error);
            res.sendStatus(500);            
        })
});


//add creatures to the DB
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = `INSERT INTO creatures ("name", "origin", "photo_url")
                        VALUES ($1, $2, $3);`;
        
    pool.query(queryText, [req.body.name, req.body.origin, req.body.photo_url])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;