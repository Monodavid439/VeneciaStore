import express from 'express';
import {getAllUsers, getUserById, createUser, updateUser,deleteUser} from '../Controller/UsersController';
import { verifyToken } from '../Middleware/authMiddleware';

const router = express.Router();

router.get('/', verifyToken, getAllUsers);
router.get('/:id', verifyToken, getUserById);
router.post('/', createUser); 
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;