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

//NEW USER REGISTRATION
router.post('/register', (req, res, next) => {
	User.create(req.body).then((user) => {
		res.status(201).send('New user added');
	});
});

//LOGIN --- this route will later perform Authentication and assign JWT for Authorization. For now, it is a placeholder route
router
	.post('/login', (req, res, next) => {
		res.send('login page');
	})

//Edit User Info
router.put('/:')
	

//DELETE USER --- this will require authorization later so users can only delete their account.
router
	.delete('/:id', (req, res, next) => {
		User.findByIdAndDelete(req.params.id)
			.then((user) => {
				res.json(user)
			})
			.catch(next)
	})
	

module.exports = router;
