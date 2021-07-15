const User = require('./user.model');
var { hash, compare } = require('bcryptjs');

// Create
const createOne = async (req, res) => {
	console.log('create User controler');
	const password = req.body.password;
	const email = req.body.email;
	const name = req.body.name;
	const role = req.body.role;

	if (
		!name?.trim() ||
		!email ||
		!email.includes('@') ||
		!password ||
		password.length < 8
	) {
		return { error: 'Invalid Name or Password' };
	}
	try {
		const docs = await User.findOne({ email: req.body.email }).exec();
		if (docs) {
			return res
				.status(200)
				.json({ error: 'use different email address' });
		}
		``;
		const passwordHash = await hash(password, 12);

		const doc = await User.create({
			email: email,
			password: passwordHash,
			name: name,
			role: role,
		});
		console.log(doc);
		return res.status(201).json({
			data: {
				role: doc.role,
				email: doc.email,
				createdAt: doc.createdAt,
				name: doc.name,
				v: doc.__v,
			},
		});
	} catch (error) {
		return res.status(501).json({ error: 'Try again later' });
	}
};
const getAll = async (req, res) => {
	console.log('in getall');
	try {
		const docs = await User.find().exec();
		res.status(200).json({ data: docs });
	} catch (error) {
		res.status(401).json({ errors: error });
	}
};
const getOne = async (req, res) => {
	console.log('Login', req.body);
	try {
		console.log('Login TRY', req.body);
		if (req.body.email) {
			const doc = await User.findOne({ email: req.body.email }).exec();
			if (doc) {
				// console.log('Inside if user Found', doc);
				// let isValid = await compare(req.body.password, doc.password);
				// console.log('isvalid: ', isValid);
				// if (isValid) {
				// 	console.log('IF isvalid: ', isValid);
				// 	return {
				// 		data: {
				// 			email: doc.email,
				// 			createdAt: doc.createdAt,
				// 			role: doc.role,
				// 			v: doc.__v,
				// 		},
				// 	};
				return res.status(200).json({ data: doc });
			} else {
				return { error: 'No user Found' };
			}
		}
	} catch (error) {
		return { error: 'something went wrong' };
	}
};
const deleteOne = async (req, res) => {
	try {
		const doc = await User.findOneAndDelete({
			_id: req.params.id,
		}).exec();
		if (!doc) {
			return res.status(200).json({ data: 'No user found' });
		}
		return res
			.status(200)
			.json({ data: { name: doc.name, email: doc.email } });
	} catch (error) {
		return res.status(404).json({ errors: error });
	}
};
const updateOne = async (req, res) => {
	try {
		const doc = await User.findOneAndUpdate(
			{
				_id: req.params.id,
			},
			{ ...req.body, updatedAt: Date.now() },
			{ new: true }
		).exec();
		if (!doc) {
			return res.status(200).json({ data: 'No user found' });
		}
		return res.status(200).json({ data: doc });
	} catch (error) {
		return res.status(401).json({ errors: error });
	}
};

module.exports = UserControllers = {
	createOne,
	getAll,
	updateOne,
	deleteOne,
	getOne,
};
