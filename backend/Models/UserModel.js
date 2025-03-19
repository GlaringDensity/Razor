const mongoose = require("mongoose");
const { userSchema } = require("../Schema/UserSchema");

const User = new mongoose.model("User", userSchema);

module.exports = { User };
