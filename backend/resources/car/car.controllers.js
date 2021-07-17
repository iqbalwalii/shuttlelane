const sendSMS = require("../../utils/twilio");
const Car = require("./car.model");

// controllers

const getAll = async (req, res) => {
  console.log("Get all Car Hiring ");
  try {
    const doc = await Car.find();
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }
    return res.status(201).json({ data: doc, message: "All cars" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// POST
const createOne = async (req, res) => {
  console.log("Create One car hire", req.body);

  try {
    const doc = await Car.create(req.body);
    if (!doc) {
      return res.status(200).json({ error: "Something went wrong" });
    }
    const data = doc.toJSON();

    // sendSMS();
    console.log("sms in CONTROLLER", data.arrivalDate);
    return res.status(201).json({ data: doc, message: "car Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
const carControllers = {
  getAll,
  createOne,
};
module.exports = carControllers;
