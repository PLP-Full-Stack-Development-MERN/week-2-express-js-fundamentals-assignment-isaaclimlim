const User = require("../models/User.js");

//Create a new User
const createUser = async (req, res) => {
    try {
       const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get all users
const getUser = async (req, res) => {
    try {
        const user = await User.find(req.params);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get a user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Update user by id
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate( id, req.body, { new: true });
        
        if (!user) {
            return res.status(500).json({ message: "User not found." });
        }

        const userUpdate = await User.findById(id);
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete user by id
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(500).json({ message: "User not found." });
        }
        
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };