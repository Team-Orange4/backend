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

//this might be at address of .../register
router.post('/register', (req, res, next) => {
    User.create(req.body)
    .then(user => {res.status(201).send("New user added")});
})

//LOGIN --- this route will later perform Authentication and assign JWT for Authorization. For now, it is a placeholder route
router.post('/login', (req, res, next) => {
	res.send('login page')
})





module.exports = router;