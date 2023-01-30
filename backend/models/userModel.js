const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
},{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema)

module.exports = User;