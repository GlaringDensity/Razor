const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
});

// In simple words, userSchema.pre("save", async function () { ... }) is a pre - save middleware in Mongoose.It means that before saving a user ,(before the specified operation happens(here it is "save"))to the database, this function will run automatically.

// What it does:
// When you create a new user and call.save(), this function runs before saving the user.

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { userSchema };