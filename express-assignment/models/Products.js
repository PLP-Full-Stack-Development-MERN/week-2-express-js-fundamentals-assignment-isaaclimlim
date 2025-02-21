const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name : { 
                type: String,
                required: [true, "Please enter a product name"],
            },

        quantity : {
                    type: Number,
                    required: [true, "Please enter the quantity of the product"],
                    default: 0
                },

        price : {
                type: Number,
                required: [true, "Please enter the price of the product"],
                default: 0  
        }
    }
)

Product = mongoose.model("Product", ProductSchema);

module.exports = Product;