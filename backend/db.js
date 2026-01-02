const mongoose = require("mongoose");

const mongoURI =
"mongodb+srv://maazt254:maaz1234@cluster0.tpq7q1j.mongodb.net/kraving?retryWrites=true&w=majority"


const mongoDBconnect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(error.message);
    process.exit(1);
  }
};


module.exports = mongoDBconnect;
