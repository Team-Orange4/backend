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
		owner: {
			ownerId: String,
			username: String
		},
		comments:[commentSchema]
		
	},
	{
		timestamps: true,
    },
    
);

const Post = mongoose.model('Post', PostSchema);


module.exports = Post;
