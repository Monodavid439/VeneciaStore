import db from '../Config/db';

export const getAllUsers = async () => {
  const [rows]: any = await db.query('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id: number) => {
  const [rows]: any = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

export const createUser = async (user: any) => {
  const { name, email, password } = user;
  const [result]: any = await db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return { id: result.insertId, name, email };
};

export const updateUser = async (id: number, user: any) => {
  const { name, email } = user;
  await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  return { id, name, email };
};

export const deleteUser = async (id: number) => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
};
