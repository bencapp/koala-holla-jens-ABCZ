const express = require("express");
const app = express();
const pg = require("pg");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const koalaRouter = require("./routes/koala.router");
// 'pool' represents a network connection to the DB
// we call 'pool.query()' inside our router
const pool = new pg.Pool({
  database: "koala",
  host: "localhost",
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("server/public"));

// ROUTES
app.use("/koalas", koalaRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
