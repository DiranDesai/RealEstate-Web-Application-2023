require("dotenv").config();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
runServer();
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const express = require("express");

let origin;

if (process.env.NODE_ENV == "production") {
    origin = "https://real-estate-frontend-z0wx.onrender.com"
} else {
    origin = "http://localhost:3000"
}

//PRODUCTION ORIGIN
let corsOptions = {
    origin: origin
}

const app = express();
const server = http.createServer(app);
const {initializeSocket, getIo} = require("./socket.js");

initializeSocket(server, origin)

let io = getIo();


io.emit("done", "YES")

 


console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(express.json());


io.on("connection", (socket) => {
    console.log("New user connected: ", socket.id)
})




app.get("/coding", (req, res) => {
    res.json({msg: true});
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", propertyRoutes);

app.use(errorHandler);

async function runServer() {
    try {
        await connectDB();
        console.log("Connected to mongo database.........");
        server.listen(5000, () => {
            console.log("Running server on port 6000");
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = io

