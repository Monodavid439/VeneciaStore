import { Router } from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../Controller/ProductsController';
import { verifyToken } from '../Middleware/authMiddleware';

const router = Router();

// Rutas para productos
router.get('/products', getAllProducts);
router.post('/products', verifyToken, createProduct);
router.put('/products/:id', verifyToken, updateProduct);  // <-- Ahora con :id
router.delete('/products/:id', verifyToken, deleteProduct);  // <-- Ahora con :id

export default router;
