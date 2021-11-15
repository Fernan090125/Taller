const { Schema, model} = require("mongoose");

const UserSchema = Schema({
  name:{
    type: String,
  },
  apellido:{
    type: String,
  },
  email:{
    type: String,
    required: true
  },
  direccion:{
    type: String,
  },
  telefono:{
    type: String,
  },
  Cedula: {
    type: String,
  },
  Password: {
    type: String,
  },
  rol: {
    type: String,
  },
  cargo: {
    type: String,
  },
  salario: {
    type: String,
  },
});

module.exports = model("User", UserSchema, "User");
