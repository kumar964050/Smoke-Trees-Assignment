const express = require("express");
var morgan = require("morgan");
// models
const userModel = require("./models/user.model");
const addressModel = require("./models/address.model");
//
const Errors = require("./middlewares/Errors");
const CustomError = require("./utils/CustomError");
const app = express();
// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine", "pug");

app.post("/register", async (req, res, next) => {
  try {
    const { name, address } = req.body;

    // Check if name and address are provided
    if (!(name && address)) {
      return next(new CustomError("Name and address are required", 400));
    }

    const newUser = await userModel.create({ name });
    await addressModel.create({
      userId: newUser._id,
      address,
    });
    res.status(201).json({
      status: "success",
      message: "User and address created successfully",
    });
  } catch (error) {
    next(error);
  }
});

app.get("/", async (req, res, next) => {
  res.render("register");
});
app.get("/users", async (req, res, next) => {
  const users = await userModel.find();
  res.render("users", { users });
});

app.use(Errors); // error handling middleware

module.exports = app;
