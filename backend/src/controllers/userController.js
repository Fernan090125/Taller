const userCont = {};
const User = require("../models/userModel");

userCont.saveUser = async (req, res) => {
  try {
    const {
      name,
      apellido,
      email,
      direccion,
      telefono,
      Cedula,
      Password,
      rol,
      cargo,
      salario,
    } = req.body;
    const newUser = new User({
      name,
      apellido,
      email,
      direccion,
      telefono,
      Cedula,
      Password,
      rol,
      cargo,
      salario,
    });
    await newUser.save();
    return res.json({ message: "Usuario guardado" });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al guardar el usuario" });
  }
};

userCont.Login = async (req, res) => {
  try {
    const { email, Password } = req.body;
    const user = await User.findOne({ userUser });
    if (!user) {
      return res.json({ message: "Usuario no encontrado" });
    } else {
      if (user.Password != Password) {
        return res.json({ message: "Contraseña incorrecta" });
      } else {
        return res.json({ message: "Bienvenido" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al logear el usuario" });
  }
};

userCont.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al obtener los usuarios" });
  }
};

userCont.getUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    const user = await User.findById(id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al obtener el usuario" });
  }
};

userCont.updateUser = async (req, res) => {
  try {
    const {
      name,
      apellido,
      email,
      direccion,
      telefono,
      Cedula,
      Password,
      rol,
      cargo,
      salario,
    } = req.body;
    const user = await User.findOne({ Cedula });
    if (!user) {
      return res.json({ message: "Usuario no encontrado" });
    } else {
      await User.updateMany(user, {
        $set: {
          name,
          apellido,
          email,
          direccion,
          telefono,
          Cedula,
          Password,
          rol,
          cargo,
          salario,
        },
      });
      return res.json({ message: "Usuario actualizado" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al actualizar el usuario" });
  }
};

userCont.deleteUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    await User.findByIdAndDelete(id);
    return res.json({ message: "Usuario eliminado" });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al eliminar el usuario" });
  }
};

module.exports = userCont;
