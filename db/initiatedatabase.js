const mongoose = require('mongoose');

const initiateDatabase=()=>
{
    const uri = "mongodb+srv://himanshuRanaDB:aditij@123Hi@himanshurana-cluster.rd9v0.mongodb.net/videoLibrary"
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Timeout after 5s instead of 30s
      })
}
module.exports=initiateDatabase;