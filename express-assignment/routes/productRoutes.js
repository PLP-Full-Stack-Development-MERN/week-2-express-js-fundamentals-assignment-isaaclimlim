const express = require('express');
const router = express.Router();
const Product = require('../models/Products.js');
const { createProduct, getProducts, getProductsById, updateProduct, deleteProduct } = require('../controllers/productControllers.js');

//Crete a new Product
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

