const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//SHOW all users ****THIS ROUTE IS JUST FOR DEV. WILL NOT BE IN PRODUCTION
router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => {
			res.json(users);
		})
		.catch(next);
});

//this might be at address of .../register
router.post('/register', async (req, res, next) => {
	try {
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		console.log(salt);
		console.log(hashedPassword);

		User.create({ ...req.body, password: hashedPassword }).then((user) => {
			res.status(201).send('New user added');
		});
	} catch {
		res.status(500);
	}
});

router.post('/login', (req, res, next) => {
	User.find({})
		.then((users) => {
			//    res.send(users);
			return users.find((user) => user.email === req.body.email);
		})
		.then((user) => {
            if(user.password === req.body.password){
                res.send('LogIn Sucessful')
            }else{
                res.send('Incorrect Username or Password')
            }
			// user
			// 	? res.status(200).send(user)
			// 	: res.status(404).send('User not found');
		})
		.catch(next);
});
// router
// 	.post('/login', async (req, res, next) => {
// 		User.find({}).then((users) => {
// 			if (users) {
// 				res.send('We have all the users');
// 			} else {
// 				res.status(401).send('cannot find users');
// 			}
//         })
//         .catch(next)
// 	})
	

module.exports = router;

//Attribution: Kyle Cook from Web Dev Simplified for how to use bcrypt for basic hashing and auth
