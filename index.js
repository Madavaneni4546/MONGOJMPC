const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
const std = require('./routes/student.route')
const port = process.env.PORT
mongoose.connect("mongodb://127.0.0.1:27017/jpmcstd").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("error while connecting database",err)
})
app.use('/api/student' , std)

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})

