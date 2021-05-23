const mongoose = require("mongoose");
const {Schema} = mongoose;

const RecommendedVideoSchema = new Schema({
    id:String,
    description:String,
    url:String


})

const RecommendedVideo = mongoose.model("RecommendedVideo",RecommendedVideoSchema);
module.exports = RecommendedVideo