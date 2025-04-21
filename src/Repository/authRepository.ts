import db from '../Config/db';

export const findUserByEmail = async (email: string) => {
  const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

export function getAllProducts() {
    throw new Error('Function not implemented.');
}
export function createProduct(name: any, description: any, price: any, stock: any, category_id: any) {
    throw new Error('Function not implemented.');
}

export function updateProduct(id: string, name: any, description: any, price: any, stock: any, category_id: any) {
    throw new Error('Function not implemented.');
}

export function deleteProduct(id: string) {
    throw new Error('Function not implemented.');
}

