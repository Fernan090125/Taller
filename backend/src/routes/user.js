const {Router} = require('express');

const{
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');


const router = Router();

router.post('/saveuser', saveUser);

router.route('/').get(getUsers);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;