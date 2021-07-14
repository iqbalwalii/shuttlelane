const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
	heading: {
		type: String,
		required: true,
		maxLength: 60,
		trim: true,
	},
	published: {
		type: String,
		enum: ['draft', 'published'],
		default: 'draft',
	},
	image: {
		data: Buffer,
		contentType: String,
	},
	postDescription: {
		type: String,
		require: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: {
		type: Date,
		default: null,
	},
	createdBy: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'user',
		// required: true,
	},
});
const Post = mongoose.model('post', postSchema);
module.exports = Post;
