const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {type: String, 
                required: [true, "Please enter your name"],
                },

        email: {type: String,
                required: [true, "Please enter your email address"],
                },
        
        role: {type: String}
    }
);

User = mongoose.model("User", UserSchema);

module.exports = User;