const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },

  //   role: {
  //     type: String,
  //     enum: ["user", "admin"],
  //     default: "user",
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
