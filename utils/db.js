import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
	if (connection.isConnected) {
		return;
	}
	try {
		const db = await mongoose.connect(process.env.dbUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		connection.isConnected = db.connections[0].readyState;
		console.log('Db connection success ');
	} catch (error) {
		console.log('Db connection failed: ', error);
	}
}
export default dbConnect;
