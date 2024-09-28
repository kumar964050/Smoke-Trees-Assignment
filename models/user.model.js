const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

userSchema.virtual("addresses", {
  ref: "Address",
  localField: "_id",
  foreignField: "userId",
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

// remove __v field while sending data
userSchema.pre(/find/, function (next) {
  this.select("-__v");
  this.populate("addresses");
  next();
});

module.exports = mongoose.model("User", userSchema);
