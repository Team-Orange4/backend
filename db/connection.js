const mongoose = require('mongoose');

const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/users';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
	})
	.then((instance) => {
		console.log(`Connected to db: ${instance.connections[0].name}`);
	})
	.catch(console.error);

module.exports = mongoose;
