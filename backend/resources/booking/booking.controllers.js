const Booking = require("./booking.model");
const getAll = async (req, res) => {
  console.log("Get all Bookings ");
  res.status(200).json({ data: "Created Booking" });
};
const createOne = async (req, res) => {
  console.log("Create One Booking ");

  const {
    arrivalDate,
    time,
    dropoffAddress,
    pickupAirport,
    passengers,
    firstName,
    email,
    lastName,
    mobile,
    flightNumber,
    selectedCar,
    title,
    countryCode,
    title,
  } = req.body;

  try {
    const doc = await Booking.create({req.body});
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }
    return res.status(201).json({ data: doc, message: "user created" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const bookingControllers = {
  getAll,
  createOne,
};
module.exports = bookingControllers;
