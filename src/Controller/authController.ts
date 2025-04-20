import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../Config/db';

const SECRET = process.env.JWT_SECRET || 'CLAVE_SUPER_SECRETA';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);

  const user = rows[0];
  if (!user) {
    res.status(404).json({ message: 'Usuario no encontrado' });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.status(401).json({ message: 'Contraseña incorrecta' });
    return;
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '2h' });

  res.json({ token });
};
