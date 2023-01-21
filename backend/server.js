require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.get("/testing", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", userRoutes);



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


runServer();
