const Booking = require('./booking.model');
const getAll = async (req, res) => {
	console.log('Get all Bookings ');
	res.status(200).json({ data: 'Created Booking' });
};
const createOne = async (req, res) => {
	console.log('Create One Booking ');

	const {
		transferType,
		carType,
		arrivalDate,
		arrivalTime,
		pickupDate,
		pickupTime,
		dropoffAddress,
		dropoffAirport,
		pickupAddress,
		pickupAirport,
		passengers,
		firstName,
		lastName,
		email,
		mobile,
	} = req.body;

	try {
		const doc = await Booking.create({
			transferType: transferType,
			carType: carType,
			arrivalDate: arrivalDate,
			arrivalTime: arrivalTime,
			pickupDate: pickupDate,
			pickupTime: pickupTime,
			dropoffAddress: dropoffAddress,
			dropoffAirport: dropoffAirport,
			pickupAddress: pickupAddress,
			pickupAirport: pickupAirport,
			passengers: passengers,
			fullName: `${firstName} ${lastName}`,
			email: email,
			mobile: mobile,
		});
		if (!doc) {
			return res.status(200).json({ error: 'Something went wrong' });
		}
		return res.status(201).json({ data: doc, message: 'user created' });
	} catch (error) {
		return res.status(500).json({ error });
	}
};
const bookingControllers = {
	getAll,
	createOne,
};
module.exports = bookingControllers;
