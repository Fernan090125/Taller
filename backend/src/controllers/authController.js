const {User} = require('../models/user');

export const signUp = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
}


export const signIn = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (error) {
        res.status(400).send();
    }
}