import db from '../Config/db';

export const findUserByEmail = async (email: string) => {
  const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};
