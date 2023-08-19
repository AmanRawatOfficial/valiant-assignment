const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "User must have a password"],
    },
    resume: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
