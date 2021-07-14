// import User from './user.model';

// export default async function (req, res) {
// 	const METHOD = req.method;
// 	switch (METHOD) {
// 		case 'GET':
// 			console.log(' GET ONE User');
// 			try {
// 				const doc = await User.findOne({ _id: req.query.id }).exec();
// 				console.log('getOne', doc);
// 				if (!doc) {
// 					return res.status(404).json({
// 						success: true,
// 						data: 'No such user',
// 					});
// 				}
// 				return res.status(200).json({ success: true, data: doc });
// 			} catch (error) {
// 				console.log('error occured', error);
// 				return res.status(401).json({ success: false, data: error });
// 			}
// 			console.log('Finished GETTING  ONE USER');
// 			break;
// 		case 'PUT':
// 			console.log('User PUT ');
// 			try {
// 				const doc = await User.findOneAndUpdate(
// 					{ _id: req.query.id },
// 					req.body,
// 					{
// 						new: true,
// 					}
// 				).exec();
// 				if (!doc) {
// 					return res.status(404).json({
// 						success: true,
// 						data: 'Update failed No such User',
// 					});
// 				}
// 				return res.status(200).json({
// 					success: true,
// 					data: doc,
// 					message: 'updated user',
// 				});
// 			} catch (error) {
// 				console.log('error occured', error);
// 				return res.status(401).json({ success: false, data: error });
// 			}
// 			console.log('Finished PUT ONE User');
// 			break;
// 		case 'DELETE':
// 			console.log('User DELETE');
// 			try {
// 				const doc = await User.findOneAndDelete({
// 					_id: req.query.id,
// 				}).exec();
// 				if (!doc) {
// 					return res.status(404).json({
// 						success: true,
// 						data: 'No such user',
// 					});
// 				}
// 				return res.status(200).json({
// 					success: true,
// 					data: doc,
// 					message: 'Deleted User',
// 				});
// 			} catch (error) {
// 				console.log('error occured', error);
// 				return res.status(401).json({ success: false, data: error });
// 			}
// 			console.log('Finished DELETE ONE USER');
// 			break;
// 		default:
// 			res.status(200).end();
// 			break;
// 	}
// }
var express = require('express');
var userRouter = express.Router();

const userControllers = require('./user.controllers');

userRouter
	.route('/')
	.get(userControllers.getAll)
	.post(userControllers.createOne);
userRouter
	.route('/:id')
	.get(userControllers.getOne)
	.put(userControllers.updateOne)
	.delete(userControllers.deleteOne);

module.exports = userRouter;
