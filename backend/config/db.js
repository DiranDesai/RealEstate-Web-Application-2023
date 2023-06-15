const mongoose = require("mongoose");
mongoose.set("strictQuery", true);


const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL);
}

module.exports = connectDB;