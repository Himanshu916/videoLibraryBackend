const express = require("express")
const musclegainrouter = express.Router()
const MuscleGainVideo = require("../models/musclegain.model")
musclegainrouter.route("/muscleGain")
.get(async(req,res)=>
{
    try
    {
        const data = await MuscleGainVideo.find({})
        res.json(data)
    }
    catch(error)
    {
        res.status(400).json({success:false,message:"unable to get fat loss videos"})
    }
})

module.exports = musclegainrouter