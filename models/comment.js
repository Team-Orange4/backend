const mongoose = require('../db/connection');

const commentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			
		},
		body: {
			type: String,
			
		},
		Author: {
			type: mongoose.Schema.Types.ObjectId,

			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);



module.exports = commentSchema;
