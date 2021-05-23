const express = require("express");
const basicExercisesRouter = express.Router();
const BasicExerciseVideo = require("../models/basicexercises.model")
basicExercisesRouter.route("/basicExercises")

.get(async (req,res)=>
{
    try
    {
        const data = await BasicExerciseVideo.find({})
        res.json(data)
    }
    catch(error)
    {
        res.status(400).json({success:"false",message:"unable to get basic exercises"})
    }
})

module.exports = basicExercisesRouter;