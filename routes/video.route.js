const express = require("express");
const videorouter = express.Router();
const BasicExerciseVideo = require("../models/basicexercises.model");
const FatLossVideo = require("../models/fatloss.model");
const RecommendedVideo = require("../models/recommended.model");
const NutritionVideo = require("../models/nutrition.model");
const MuscleGainVideo = require("../models/musclegain.model")




videorouter.param("videoId",async (req,res,next,videoId)=>{
try
{
    const video = await BasicExerciseVideo.findById(videoId) || await FatLossVideo.findById(videoId) || await RecommendedVideo.findById(videoId) || await NutritionVideo.findById(videoId) || await MuscleGainVideo.findById(videoId);
   
    if(!video)
    {
       return res.status(400).json({success:"fail",message:"error"})
    }
    req.video=video;
    next()
}
catch
{
res.status(400).json({success:false,message:"error while retrieving video"})
}

  
})
videorouter.route("/:videoId")
.get(async (req,res)=>
{
    const {video}= req;
        res.json(video)
})

module.exports = videorouter;