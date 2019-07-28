const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.Promise = global.Promise;
  let db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  return mongoose.connect(process.env.DATABASE_URL, function(err, db) {
    if (err) {
      db.close();
      console.log(`Database error: ${err.message}`);
      throw err;
    }
    console.log(`Database ${process.env.DATABASE_URL} created!`);
  });
};

module.exports = { connectDb };
