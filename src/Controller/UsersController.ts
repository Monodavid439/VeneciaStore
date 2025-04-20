import { Request, Response } from 'express';
import * as userService from '../Services/UserService';
import bcrypt from 'bcrypt';

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await userService.getAllUsers();
  res.json(users);
};

// Obtener usuario por ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

// Crear usuario (con hash)
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userService.createUser({ name, email, password: hashedPassword });
  res.status(201).json(newUser);
};

// Actualizar usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const updatedUser = await userService.updateUser(id, req.body);
  res.json(updatedUser);
};

// Eliminar usuario
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(204).send();
};
