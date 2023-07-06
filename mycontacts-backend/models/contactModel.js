const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      // this refer to the other user schema and user id for it means user can create its contact and that contact is associate with that user only
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone number"],
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("Contact", contactSchema);
