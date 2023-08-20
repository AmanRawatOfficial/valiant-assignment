// PUBLIC MODULES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// LOCAL MODULES
const userRouter = require("./routes/userRoutes");

const app = express();

// MIDDLEWARES
app.use(express.json()); // body-parser
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use("/api/users", userRouter);

// EXPORTS
module.exports = app;
