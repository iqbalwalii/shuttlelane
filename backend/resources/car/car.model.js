var mongoose = require("mongoose");
const shortid = require("shortid");

const carSchema = new mongoose.Schema(
  {
    carType: {
      type: String,
      required: true,
    },
    pickupAddress: {
      type: String,
      trim: true,
    },
    destination: {
      type: String,
      trim: true,
    },
    time: {
      type: String,
    },
    date: {
      type: Date,
    },
    firstName: {
      required: true,
      type: String,
      trim: true,
    },
    lastName: {
      required: true,
      type: String,
      trim: true,
    },
    email: {
      required: true,
      type: String,
      trim: true,
      match: /.+\@.+\..+/,
    },
    mobile: {
      required: true,
      type: String,
      trim: true,
    },
    bookingReference: {
      type: mongoose.Schema.Types.Mixed,
      default: shortid.generate,
    },
    amount: {
      type: String,
    },

    countryCode: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model.car || mongoose.model("car", carSchema);

module.exports = Car;
