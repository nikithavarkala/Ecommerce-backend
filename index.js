const bcrypt=require("bcryptjs");
const cors=require('cors')
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// const url="mongodb+srv://nikithav:varkala1234@cluster0.p2v99sl.mongodb.net/Employee?retryWrites=true&w=majority"

const connection=require("./config/dbMongoose")
const express = require("express");
const productRoute = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const app = express();

app.use(cors())

app.use(express.json());

app.use("/api", productRoute);
app.use('/user',userRoutes)
app.use('/cart',cartRoutes)

app.listen(3001, async () => {
    try {
        await connection();
        console.log("server running on port 3001");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});