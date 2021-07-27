import express from 'express';
import {createUser, getUser, getSpecificUser, deleteUser, updateUser} from '../controllers/users.js'
const router = express.Router();

//all routes in here are starting with /users
//GET 
router.get('/', getUser);
//POST
router.post('/',createUser);
//GET users/:id
router.get('/:id', getSpecificUser);
//DELETE
router.delete('/:id', deleteUser);
//PATCH
router.patch('/:id', updateUser);

export default router;