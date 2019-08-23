const express = require("express");
const morgan = require("morgan");
const path = require("path");
const port = 8080;

const app = express();

//logging middleware
app.use(morgan("dev"));

//body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serving up static files
app.use(express.static(path.resolve(__dirname, "..")));

// REQUIRED: send poke routes to pokemon file!!! ************************************
app.use("/api", require("./api"));

// REQUIRED: send trainer routes to trainer file!!! *********************************
const trainerRouter = require("./api/trainer");
app.use("/trainer", trainerRouter);

// error handling middleware comes last
// Express identifies this as error handling middleware
// because it has 4 parameters, the first of which is an 'err'
// provided from some error throwing middleware as a call like 'next(err)'
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

//added which port we are listening to.
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

module.exports = app;
