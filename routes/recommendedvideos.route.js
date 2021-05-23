
const express = require("express");
const recommendedrouter = express.Router();
const RecommendedVideo = require("../models/recommended.model")



recommendedrouter.route("/recommendedVideos")
.get(async (req,res)=>
{
    try
    {
      const data = await  RecommendedVideo.find({})
      res.json(data)
    }
    catch(error)
    {
        res.status(400).json({success:"fail",message:"unable to get recommended videos"})
    }

})

module.exports = recommendedrouter;