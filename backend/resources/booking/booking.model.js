var mongoose = require('mongoose');
const shortid = require('shortid');

const bookingSchema = new mongoose.Schema(
	{
		transferType: {
			type: String,
			enum: [
				'Airport Pick-up',
				'Airport Drop-off',
				'Car Hire',
				'Priority Pass',
			],
			required: true,
		},
		carType: {
			required: true,
			type: String,
			enum: ['Bussiness', 'Economy', 'Luxury', 'Executive', 'Shuttle'],
		},
		pickupAirport: {
			type: String,
		},
		pickupAddress: {
			type: String,
			trim: true,
		},
		dropoffAirport: {
			type: String,
		},
		dropoffAddress: {
			type: String,
			trim: true,
		},
		arrivalTime: {
			type: Date,
		},
		arrivalDate: {
			type: Date,
		},
		pickupDate: {
			type: Date,
		},
		pickupTime: {
			type: Date,
		},
		passengers: {
			type: Number,
		},
		fullName: {
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
			type: Number,
			trim: true,
		},
		paymentStatus: {
			type: String,
			enum: ['Successful', 'Pending'],
			default: 'Pending',
		},
		bookingReference: {
			type: mongoose.Schema.Types.Mixed,
			default: shortid.generate,
		},
		amount: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Booking =
	mongoose.model.booking || mongoose.model('booking', bookingSchema);

module.exports = Booking;
