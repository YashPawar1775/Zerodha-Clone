const { Schema } = require("mongoose");

const UsersSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

module.exports = { UsersSchema };