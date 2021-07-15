const express = require('express');
const hotelControllers = require('./hotel.controllers');
const hotelRouter = express.Router();

hotelRouter
	.route('/')
	.get(hotelControllers.getAll)
	.post(hotelControllers.createOne);
module.exports = hotelRouter;
