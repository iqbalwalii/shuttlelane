const sendSMS = require("../../utils/twilio");
const Booking = require("./booking.model");
const getAll = async (req, res) => {
  console.log("Get all Bookings ");
  try {
    const doc = await Booking.find();
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }

    //Your Airport Transfer Pick-up service has been booked for 13-07-2021 12:25pm. Your booking ref: PUORS3U. Thank you for using ShuttleLane.

    return res.status(201).json({ data: doc, message: "All Bookings" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// POST
const createOne = async (req, res) => {
  console.log("Create One Booking hell", req.body);

  try {
    const doc = await Booking.create(req.body);
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }
    const data = doc.toJSON();

    const sms = await sendSMS(
      `Your ${data.formType} service has been booked for ${data.arrivalDate} ${data.time}. Your booking ref: ${data.bookingReference}.Thank you for using ShuttleLane.`,
      doc.mobile
    );
    console.log("sms in CONTROLLER", data.arrivalDate);
    return res.status(201).json({ data: doc, message: "Booking Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
const bookingControllers = {
  getAll,
  createOne,
};
module.exports = bookingControllers;
