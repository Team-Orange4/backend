const mongoose = require('../db/connection');

const commentSchema = new mongoose.Schema(
	{
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
