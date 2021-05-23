const express = require("express");
const nutritionrouter = express.Router();
const NutritionVideo = require("../models/nutrition.model")
nutritionrouter.route("/nutrition")
.get(async(req,res)=>
{
    try{
        const data = await NutritionVideo.find({})
        res.json(data)
    }
    catch(error)
    {
        res.status(400).json({success:false,message:"unable to get nutrition videos"})
    }
})
module.exports = nutritionrouter;