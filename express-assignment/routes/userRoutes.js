const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { createUser, getUser, getUserById, updateUser, deleteUser } = require('../controllers/userControllers.js');

// Register a new user
router.post('/', createUser);

//Get the user
router.get('/', getUser);

//Get the user by id
router.get('/:id', getUserById);

//Update the user
router.put('/:id', updateUser);

//Delete the user
router.delete('/:id', deleteUser);

module.exports = router;