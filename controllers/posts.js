require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authToken = require('../authToken');
app = express();
app.use(express.json());

const router = express.Router();

const Posts = require('../models/post');

router.get('/', (req, res, next) => {
	Posts.find()
		.then((posts) => res.json(posts))
		.catch(next);
});
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Posts.findById(id)
		.then((post) => res.json(post))
		.catch(next);
});
router.post('/', authToken, (req, res, next) => {
	const postData = req.body;
	Posts.create({
		...postData,
		owner: {
			ownerId: req.user._id,
			username: req.user.username,
		},
	})
		.then((post) => res.status(201).json(post))
		.catch(next);
});
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const postData = req.body;
	Posts.findOneAndUpdate({ _id: id }, postData, { new: true })
		.then((post) => res.json(post))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Posts.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
