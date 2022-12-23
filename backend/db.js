
const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://arsh:arsh30301@cluster0.we0qde8.mongodb.net/inotebook?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB ${connect.connection.host}`);
    }
    catch(err){
        console.log(`Error: ${err.message}`);
        process.exit();
    }
};
module.exports = connectDB;