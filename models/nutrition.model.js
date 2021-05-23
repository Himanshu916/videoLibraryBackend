const mongoose = require("mongoose");
const {Schema} = mongoose;

const NutritionVideoSchema = new Schema({
    id:String,
    description:String,
    url:String


})

const NutritionVideo = mongoose.model("NutritionVideo",NutritionVideoSchema);
module.exports = NutritionVideo