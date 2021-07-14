var secrets = require('../config/jwtKeys');
var jwt = require('jsonwebtoken');
var { compare } = require('bcryptjs');
var userControllers = require('../resources/user/user.controllers');

async function signIn(req, res) {
	console.log('in SignIN', req.body);
	try {
		console.log('in SiN try');
		const response = await userControllers.getOne(req, res);
		if (response.error) {
			res.status(404).json(response);
		}
		if (response.data) {
			let data = response.data;
			let isValid = await compare(req.body.password, data.password);
			console.log('isvalid: ', isValid);
			if (isValid) {
				console.log('IF isvalid: ', isValid);
				const user = {
					email: data.email,
					acretedAt: data.createdAt,
					role: data.role,
					v: data.__v,
				};
				const token = await jwt.sign(
					user,
					`7006-we-are-shuttle-078-lane-.-com-236-from-fiverr`,
					{ expiresIn: `1h` }
				);
				res.status(200).json({ data: user, token });
			} else {
				res.status(200).json({ error: 'Invalid Credentials' });
			}
		}
	} catch (error) {
		console.log('IN AUTH CATCH', error);
		res.status(501).json({ error: error });
	}
	return;
}
async function signUp(req, res) {
	console.log('In signUP', req.body);
	try {
		const response = await userControllers.createOne(req, res);
		if (response.error) {
			res.status(200).json(response);
		}
		// return response;
	} catch (error) {
		console.log('signUP catch', error);
		res.status(422).end();
	}
}

const auth = {
	signIn,
	signUp,
};

module.exports = auth;
