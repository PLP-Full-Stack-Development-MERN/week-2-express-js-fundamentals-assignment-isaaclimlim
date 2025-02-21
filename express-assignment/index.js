const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
app.use(express.json());


const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.get('/', (req, res) => {
    res.send('Welcome to Backend Development!');
});


//Routes
app.use("/api/users", userRoute);

//Connect to MongoDB
mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, (req, res) => {
        console.log("Server running on port 3000!");
    })
}).catch(() => {
        console.log("Failed to connect to MongoDB!");
    })





    



