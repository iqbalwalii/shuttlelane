const Booking = require("./booking.model");
const getAll = async (req, res) => {
  console.log("Get all Bookings ");
  try {
    const doc = await Booking.find();
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }

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
    return res.status(201).json({ data: doc, message: "Booking Added" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const bookingControllers = {
  getAll,
  createOne,
};
module.exports = bookingControllers;
