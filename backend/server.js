require("dotenv").config();
const cors = require("cors");
const fileUpload = require('express-fileupload');
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
runServer();
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

let corsOptions = {
    origin : 'https://real-estate-backend-2nky.onrender.com/',
}

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(express.json());


app.get("/coding", (req, res) => {
    res.json({msg: true});
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", propertyRoutes);

app.use(errorHandler);

async function runServer() {
    try {
        await connectDB();
        console.log("Connected to mongo database........");
        app.listen(5000, () => {
            console.log("Running server on port 5000");
        });
    } catch (error) {
        console.log(error);
    }
}


