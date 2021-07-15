const mongoose = require('mongoose');
const connection = {};

async function dbConnect() {
	if (connection.isConnected) {
		return;
	}
	try {
		const db = await mongoose.connect(
			'mongodb+srv://irfan:@Shuttlelane@cluster0.zkded.mongodb.net/shuttlelane?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		connection.isConnected = db.connections[0].readyState;
		console.log('Db connection success ');
	} catch (error) {
		console.log('Db connection failed: ', error);
	}
}
module.exports = dbConnect;
