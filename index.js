const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>
{
    res.send({success:"true"})
})

app.listen(process.env.PORT||5000,function()
{
    console.log("server started  ")
})