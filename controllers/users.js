const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => {
			res.json(users);
		})
		.catch(next);
});

router.post('/', (req, res, next) => {
    User.create(req.body)
    .then(user => {res.status(201).send("New user added")});
})

module.exports = router;