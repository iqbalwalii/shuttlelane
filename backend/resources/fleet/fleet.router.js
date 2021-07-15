const express = require('express');
const fleetRouter = express.Router();
const fleetControllers = require('./fleet.controllers');

fleetRouter
	.route('/')
	.get(fleetControllers.getAll)
	.post(fleetControllers.createOne);

module.exports = fleetRouter;
