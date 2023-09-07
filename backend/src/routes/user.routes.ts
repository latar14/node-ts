import { Router } from "express";
const {userController} = require('../controllers/user.controller')




const router = Router();

router.post('/users/login', userController.userLogin);
router.post('/user', userController.addUser);
router.get('/users', userController.getUsers)

module.exports = router;