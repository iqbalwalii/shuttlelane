const express = require('express');
const postRouter = express.Router();

const postControllers = require('./post.controllers');
function sign(req, res, next) {
	console.log('Post Middleaware');
	next();
}
postRouter
	.route('/')
	.get(postControllers.getAll)
	.post(sign, postControllers.createOne);
postRouter
	.route('/:id')
	.put(sign, postControllers.updateOne)
	.delete(sign, postControllers.deleteOne)
	.get(postControllers.getOne);

module.exports = postRouter;
