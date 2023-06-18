require("dotenv").config();
const path = require("path");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
runServer();
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

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


console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));
app.use(fileUpload());
app.use(express.json());

        
// Serve static files such as images, CSS files, and JavaScript files for the React frontend app
app.use(express.static(path.join(__dirname, 'frontend/build')))
// This solves the "Not found" issue when loading an URL other than index.html.
app.get('/*', (req, res) => { //n3
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'), err => {
    if (err) { res.status(500).send(err) }
  })
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
        console.log("Connected to mongo database.......");
        app.listen(5000, () => {
            console.log("Running server on port 5000");
        });
    } catch (error) {
        console.log(error);
    }
}


