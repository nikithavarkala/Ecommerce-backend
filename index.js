const express = require("express");
const bcrypt=require("bcrypt");
const cors=require("cors");
const AllRoutes=require('./Routes/AllRoutes')

const app = express();
app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); 
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use(express.json())

app.use('/api',AllRoutes)

app.listen(3001,()=>{
    console.log("server running on port 3001");
})