const express = require("express")
const fatlossrouter = express.Router();
const FatLossVideo = require("../models/fatloss.model")

fatlossrouter.route("/fatLoss")
.get(async (req,res)=>
{
    try
    {
        const data = await FatLossVideo.find({})
        res.json(data)
    }
    catch(error)
    {
        res.status(400).json({success:false,message:"unable to get fat loss videos"})
    }
})

module.exports = fatlossrouter