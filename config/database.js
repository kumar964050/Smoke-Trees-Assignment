const mongoose = require("mongoose");
const URL = process.env.DB_URL;
exports.connect = () => {
  mongoose
    .connect(URL)
    .then(() => console.log("database connected successfully"));
};
