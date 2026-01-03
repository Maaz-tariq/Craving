// const mongoose = require("mongoose");

// const mongoURI =
// // "mongodb+srv://maazt254:maaz1234@cluster0.tpq7q1j.mongodb.net/kravingmern?retryWrites=true&w=majority"
//     "mongodb+srv://maazt254:maaz1234@cluster0.tpq7q1j.mongodb.net/?appName=Cluster0"


// const mongoDBconnect = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("MongoDB connected successfully");
//     // const fetchedData = await mongoose.connection.db.collection("food_items");
//     console.log(await mongoose.connection.db.listCollections().toArray());

//     fetchedData.find({}).toArray(function(err,data) {
//       if(err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     })
//   } catch (error) {
//     console.error("MongoDB connection error:");
//     console.error(error.message);
//     process.exit(1);
//   }
// };


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
    console.log(data);

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = mongoDBconnect;



