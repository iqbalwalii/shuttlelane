const Hotel = require('./hotel.model');
const getAll = async (req, res) => {
	try {
		const docs = await Hotel.find().exec();
		return res.status(200).json({ data: docs });
	} catch (error) {
		return res.status(404).json({ errors: error });
	}
};
const createOne = async (req, res) => {
	console.log(req.body);

	console.log('creating Hotel');
	console.log(req.body);
	try {
		console.log('trying');

		const doc = await Hotel.create({
			...req.body,
		});
		console.log(doc);
		res.status(201).json({ data: doc });
	} catch (error) {
		console.log('creating error');

		res.status(401).json({ error: error });
	}
};

const hotelControllers = {
	createOne,
	getAll,
};
module.exports = hotelControllers;
