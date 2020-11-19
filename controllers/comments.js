const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authToken = require('../authToken');

const Post = require('./../models/post');

router.post('/:id', authToken, (req, res, next) => {
	const commentData = req.body;

	Post.findById(req.params.id)
		.then((post) => {
			post.comments.push({
				...commentData,
				owner: {
					ownerId: req.user._id,
					username: req.user.username,
				},
			});

			return post.save();
		})

		.then((posts) => res.status(201).json({ posts }))
		.catch(next);
});
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Post.findOne({ 'comments._id': id })
		.then((post) => {
			post.comments.id(id).remove();
			return post.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const commentData = req.body;

	Post.findOne({
		'reviews._id': id,
	})
		.then((post) => {
			const comment = post.comments.id(id);
			comment.set(commentData);
			return post.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});
module.exports = router;
