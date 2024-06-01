import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_ATLAS_URI).then((data)=>{
    console.log("It is correctly connected to the Data Base");
}).catch((error)=>{
    console.log("Something is wrong and it is not connected to the Data Base")
});