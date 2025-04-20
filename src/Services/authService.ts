import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../Repository/authRepository';

const SECRET = process.env.JWT_SECRET || 'CLAVE_SUPER_SECRETA';

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Usuario no encontrado');

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error('Contraseña incorrecta');

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '2h' });

  return token;
};
