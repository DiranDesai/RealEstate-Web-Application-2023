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
    },
    profileUrl: {
        type: String,
        default: null
    },
    job: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        default: null
    },
    about: {
        type: String,
        default: null
    },
    twitter: {
        type: String,
        default: null
    },
    facebook: {
        type: String,
        default: null
    }
},{
    timestamps: true
}
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

const User = mongoose.model('User', userSchema)

module.exports = User;