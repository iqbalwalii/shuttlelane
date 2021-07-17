const express = require("express");
const carRouter = express.Router();
const carControllers = require("./car.controllers");

carRouter.route("/").get(carControllers.getAll).post(carControllers.createOne);
// Router.route('/:id').get().post();

module.exports = carRouter;
