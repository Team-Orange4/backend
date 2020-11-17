const mongoose = require('../db/connection');

const CommentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,

			ref: 'User',
		},
		timeOfComment: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
    },
    
);

module.exports = CommentSchema;
