const mongoose = require("mongoose");
const {Schema} = mongoose;

const FatLossVideoSchema = new Schema({
    id:String,
    description:String,
    url:String


})

const FatLossVideo = mongoose.model("FatLossVideo",FatLossVideoSchema);
module.exports = FatLossVideo