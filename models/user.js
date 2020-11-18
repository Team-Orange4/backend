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
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		require: true,
	},
},
{
	timestamps: true
}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;