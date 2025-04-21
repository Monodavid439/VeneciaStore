import { Request, Response } from 'express';
import * as ProductRepository from '../Repository/authRepository'; // Ojo: ¿seguro que es "authRepository"? Suena más a productos -> ProductRepository

// Obtener todos los productos
export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await ProductRepository.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response): Promise<any> => {
  const { name, description, price, stock, category_id } = req.body;

try {
    if (!name || !description || !price || !stock || !category_id) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const newProduct = await ProductRepository.createProduct(name, description, price, stock, category_id);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { name, description, price, stock, category_id } = req.body;

  try {
    const updatedProduct = await ProductRepository.updateProduct(id, name, description, price, stock, category_id);
    if (updatedProduct === null || updatedProduct === undefined) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  try {
    const deleteResult = await ProductRepository.deleteProduct(id);
    if (deleteResult === null || deleteResult === undefined) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};
