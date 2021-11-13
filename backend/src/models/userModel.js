const { Schema, model} = require("mongoose");

const UserSchema = Schema({
  userUser: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  type: {
    type: String,
  },
});

module.exports = model("User", UserSchema, "Users");
