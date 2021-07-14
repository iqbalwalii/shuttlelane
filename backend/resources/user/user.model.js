const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		role: {
			type: String,
			enum: ['superAdmin', 'blogger', 'admin'],
			default: 'blogger',
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

// userSchema.pre('save', function (next) {
// 	if (!this.isModified('password')) {
// 		return next();
// 	}

// 	bcrypt.hash(this.password, 8, (err, hash) => {
// 		if (err) {
// 			return next(err);
// 		}

// 		this.password = hash;
// 		next();
// 	});
// });

// userSchema.methods.checkPassword = function (password) {
// 	const passwordHash = this.password;
// 	return new Promise((resolve, reject) => {
// 		bcrypt.compare(password, passwordHash, (err, same) => {
// 			if (err) {
// 				return reject(err);
// 			}
// 			resolve(same);
// 		});
// 	});
// };

const User = mongoose.models.user || mongoose.model('user', userSchema);
module.exports = User;
