const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

//routes
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

//API Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Blog API" });
});

//connect to db
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});














