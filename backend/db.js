const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://maazt254:maaz1234@cluster0.tpq7q1j.mongodb.net/kravingmern?retryWrites=true&w=majority";

const mongoDBconnect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");

    const collection = mongoose.connection.db.collection("food_items");

    const data = await collection.find({}).toArray();
    console.log("Fetched food items:", data.length);
    console.log();

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = mongoDBconnect;



