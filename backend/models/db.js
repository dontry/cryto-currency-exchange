const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.Promise = global.Promise;
  let db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  const databaseUrl = process.env.production
    ? process.env.PUBLIC_DATABASE_URL
    : process.env.LOCAL_DATABASE_URL;

  return mongoose.connect(databaseUrl, function(err, db) {
    if (err) {
      db.close();
      console.log(`Database error: ${err.message}`);
      throw err;
    }
    console.log(`Database ${databaseUrl} created!`);
  });
};

module.exports = { connectDb };
