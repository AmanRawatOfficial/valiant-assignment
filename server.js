// PUBLIC MODULES
const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! Shutting down 😴");
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

// DB CONNECTION
mongoose.connect(DB).then(() => console.log("DB Connection Successful 👏"));

// SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! Shutting down 😴");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
