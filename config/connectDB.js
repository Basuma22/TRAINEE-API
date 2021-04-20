const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL, { 
     useNewUrlParser: true,
     useUnifieldTopology: true,
    });
    console.log("connected to database");
};

module.exports = connectDB;





