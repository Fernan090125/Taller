const userCont = {};
const User = require('../models/userModel');


userCont.saveUser = async (req, res) => {
    try{
        const{userUser,userPassword,type}=req.body;
            const newUser = new User({
            userUser,
            userPassword,
            type
        });
        await newUser.save();
        return res.json({ message: 'Usuario guardado' });
    }catch(err){
        console.log(err);
        return res.json({ message: 'Error al guardar el usuario' });
    }
}


userCont.Login = async (req, res) => {
    try{
        const{userUser,userPassword}=req.body;
        const user = await User.findOne({userUser});
        if(!user){
            return res.json({ message: 'Usuario no encontrado' });
        }
        else{
            if(user.userPassword!=userPassword){
                return res.json({ message: 'Contraseña incorrecta' });
            }
            else{
                return res.json({ message: 'Bienvenido' });
            }
        }
    }catch(err){
        console.log(err);
        return res.json({ message: 'Error al logear el usuario' });
    }
}