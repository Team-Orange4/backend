const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user');

//SHOW all users ****THIS ROUTE IS JUST FOR DEV. WILL NOT BE IN PRODUCTION
router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => {
			res.json(users);
		})
		.catch(next);
});

//NEW USER REGISTRATION /users/register
router.post('/register', (req, res, next) => {
	User.create(req.body)
	.then((user) => {
		res.status(201).json(user);
	})
	.catch(next)
});

//LOGIN @ /uses/login this route will later perform Authentication and assign JWT for Authorization. For now, it is a placeholder route
router
	.post('/login', (req, res, next) => {
		res.send('login page');
	})

//Edit User Info
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	User.findOneAndUpdate({_id: id}, req.body, {new: true})
	.then(user => {
		res.status(201).json(user)
	})
	.catch(next)
})
	

//DELETE USER @ /users/:id --- this will require authorization later so users can only delete their account.
router
	.delete('/:id', (req, res, next) => {
		User.findByIdAndDelete(req.params.id)
			.then((user) => {
				res.sendStatus(204)
			})
			.catch(next)
	})
	

module.exports = router;
