const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const recommendedrouter = require("./routes/recommendedvideos.route")
const basicExercisesRouter = require("./routes/basicexercises.route")
const fatlossrouter = require("./routes/fatLoss.route")
const musclegainrouter = require("./routes/musclegain.route")
const nutritionrouter = require("./routes/nutrition.route")
const videorouter = require("./routes/video.route");
const initiateDatabase = require("./db/initiatedatabase")

initiateDatabase();

app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>
{
    res.send({success:"true"})
})

app.use("/api",recommendedrouter)
app.use("/api",basicExercisesRouter)
app.use("/api",fatlossrouter)
app.use("/api",musclegainrouter)
app.use("/api",nutritionrouter)
app.use("/api/videos",videorouter)


// if the route is not found
app.use((req, res) => {
    res.status(404).json({ success: false, message: "route not found on server, please check"})
  })
  
  /**
   * Error Handler
   * Don't move
   */
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
  })

app.listen(process.env.PORT||5000,function()
{
    console.log("server started  ")
})