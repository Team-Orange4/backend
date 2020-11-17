const express = require('express');
const router = express.Router();

const Post = require('./../models/post');

router.post('/:id', (req, res, next) => {
	const commentData = req.body;

	

	Post.findById(req.params.id)
		.then((post) => {
			post.comments.push(commentData);

			return post.save();
		})

		.then((posts) => res.status(201).json({ posts }))
		.catch(next);
});

module.exports=router