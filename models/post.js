const mongoose = require('../db/connection');
const commentSchema=require('./comment')

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		Author: {
			type: mongoose.Schema.Types.ObjectId,

			ref: 'User',
		},
		comments:[commentSchema]
		
	},
	{
		timestamps: true,
    },
    
);

const Post = mongoose.model('Post', PostSchema);


module.exports = Post;
