const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
		number: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Hotel = mongoose.model.hotel || mongoose.model('hotel', hotelSchema);

module.exports = Hotel;
