const express = require("express");
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

// POST
koalaRouter.post("/", (req, res) => {
  console.log("in router post");
  const newKoala = req.body;
  const queryText = `
        INSERT INTO "koala" ("name", "gender", "age", "ready_to_transfer", "notes")
        VALUES ($1, $2, $3, $4, $5)`;
  const queryParams = [
    newKoala.name,
    newKoala.gender,
    newKoala.age,
    newKoala.readyToTransfer,
    newKoala.notes,
  ];
  pool
    .query(queryText, queryParams)
    .then((dbResponse) => {
      res.sendStatus(204); // completed successfully
    })
    .catch((err) => {
      console.log("error in server POST:", err);
      res.sendStatus(500);
    });
});

// PUT

// DELETE

module.exports = koalaRouter;
