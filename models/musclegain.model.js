const mongoose = require("mongoose");
const {Schema} = mongoose;

const MuscleGainVideoSchema = new Schema({
    id:String,
    description:String,
    url:String


})

const MuscleGainVideo = mongoose.model("MuscleGainVideo",MuscleGainVideoSchema);
module.exports = MuscleGainVideo