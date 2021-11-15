const {Router} = require('express');

const{
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser
} = require('../controllers/user');


const router = Router();

router.route('/').get(getUsers).post(saveUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;