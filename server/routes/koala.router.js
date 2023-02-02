const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require("pg");
// 'pool' represents a network connection to the DB
// we call 'pool.query()' inside our router
const pool = new pg.Pool({
    database: "koala",
    host: "localhost",
    port: 5432,
});

// GET
koalaRouter.get('/',(res,req)=> {
    let sqlQuery = `
    SELECT * FROM koala
    ORDER BY "name" ASC
    `; 
    pool.query(sqlQuery)
    .then ((dbRes)=> {
        console.log('Database Works!!!');
        res.send(dbRes.rows)
    }).catch((err) => {
        console.log ('Error Database failed',err);
        res.sendStatus(500);
    })
    
})

// POST


// PUT


// DELETE

module.exports = koalaRouter;