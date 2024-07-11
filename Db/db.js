const mongoose = require('mongoose');

const dbConnect=async()=>{
    await mongoose.connect("mongodb+srv://rw5rajatas:node@cluster0.wlofk56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to db");
}


module.exports=dbConnect