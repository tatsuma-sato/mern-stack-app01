const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const ticketModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Pleasr select product"],
      enum: ["iPhone", "MacBookPro", "iMac", "iPad"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issure"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketModel);
