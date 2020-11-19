const mongoose = require('../db/connection');

const commentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		body: {
			type: String,
		},
		owner: {
			ownerId: String,
			username: String,
		},
	},
	{
		timestamps: true,
	}
);



module.exports = commentSchema;
