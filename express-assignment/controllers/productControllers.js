const Product = require('../models/Products.js');

//Create a new Product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get a product by id
const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Update product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if (!product) {
            return res.status(500).json({ message: "Product not found." });
        }

        const productUpdate = await Product.findById(id);
        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete product by id
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if (!product) {
            return res.status(500).json({ message: "Product not found." });
        }

        const productDelete = await Product.find({});
        res.status(200).json(productDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createProduct, getProducts, getProductsById, updateProduct, deleteProduct };