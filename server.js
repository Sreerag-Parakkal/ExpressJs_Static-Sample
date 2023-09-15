const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");

// app.use('/static',express.static("public"));
console.log(__dirname + "/images");
app.use("/static",express.static (path.join(__dirname + "/images")));


app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})