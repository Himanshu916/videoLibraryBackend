const mongoose = require("mongoose");
const {Schema} = mongoose;

const BasicExerciseVideoSchema = new Schema({
    id:String,
    description:String,
    url:String


})

const BasicExerciseVideo = mongoose.model("BasicExerciseVideo",BasicExerciseVideoSchema);
module.exports = BasicExerciseVideo