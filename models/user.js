const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		index: true,
		unique: true,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: false,
	},
	accountCreationDate: {
		type: Date,
		default: Date.now,
	},
	password: {
		type: String,
		require: true,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
