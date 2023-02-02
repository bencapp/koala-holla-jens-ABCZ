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
koalaRouter.get("/", (req, res) => {
  let sqlQuery = `
    SELECT * FROM koala
    ORDER BY "name" ASC
    `;
  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log("Error Database failed", err);
      res.sendStatus(500);
    });
});

// POST
koalaRouter.post("/", (req, res) => {
  const newKoala = req.body;
  const queryText = `
        INSERT INTO "koala" ("name", "gender", "age", "ready_to_transfer", "notes")
        VALUES ($1, $2, $3, $4, $5)`;
  const queryParams = [
    newKoala.name,
    newKoala.gender,
    newKoala.age,
    newKoala.ready_to_transfer,
    newKoala.notes,
  ];
  pool
    .query(queryText, queryParams)
    .then(() => {
      res.sendStatus(204); // completed successfully
    })
    .catch((err) => {
      console.log("error in server POST:", err);
      res.sendStatus(500);
    });
});

// PUT
koalaRouter.put("/:id", (req, res) => {
  console.log("in router PUT");
  console.log("putting with PARAMS", req.params);

  const queryText = `
        UPDATE koala
        SET ready_to_transfer = NOT ready_to_transfer
        WHERE id = $1
        `;
  const queryParams = [req.params.id];
  console.log("PUTTING with text:", queryText, "params:", queryParams);

  pool
    .query(queryText, queryParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("error in server PUT:", err);
    });
});


// DELETE
koalaRouter.delete ('/:id',(req,res) => {
let koalaId = req.params.id;
console.log ('delete request for the id',koalaId);

let sqlQuery = `
DELETE FROM "koala"
WHERE "id" = $1;
`;
const sqlParams = [
koalaId,
];
pool.query(sqlQuery,sqlParams)
.then (()=> {
console.log('koala deleted');
res.sendStatus(204);
})
    .catch((err)=> {
        console.log(`Error deleting`,err);
        res.sendStatus(500);

    })

})



module.exports = koalaRouter;
