require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authToken = require('../authToken');

app = express();
app.use(express.json());

router.get('/', authToken, (req, res, next) => {
	User.find({})
		.then((users) => {
			return users.find((user) => user.email === req.user.email);
		})
		.then((user) => {
			console.log(user);
			res.json(user);
		})
		.catch(next);
});

//REGISTER @ /users/register
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
			return users.find((user) => user.email === req.body.email);
		})
		.then(async (user) => {
			if (user) {
				if (await bcrypt.compare(req.body.password, user.password)) {
					// Attribution for user.toJSON() to Nipek from Stack Overflow @ https://stackoverflow.com/questions/52781477/expected-payload-to-be-a-plain-object-mean. This changes the plan text to json so it can then be used by jwt and resturned as json in a later line.
					const accessToken = jwt.sign(
						user.toJSON(),
						process.env.ACCESS_TOKEN_SECRET
					);
					res.json({ accessToken: accessToken, id: user._id });
				} else {
					res.send('Incorrect Username or Password');
				}
			} else {
				res.status(404).send('User not found');
				//this line is for dev only. We do not want to have a seperate return if emails do not exist vs if passwords are incorrect. This could be a vuln that allows malicious people to find out if emails have acounts.
			}
		})
		.catch(next);
});

///DEV ONLY ROUTES DELETE BEFORE DEPLOYMENT **START**
router.get('/all', (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch(next);
});

///DEV ONLY ROUTES DELETE BEFORE DEPLOYMENT **END**

module.exports = router;

// Attribution: Kyle Cook from Web Dev Simplified for how to use bcrypt for basic hashing and authorization though JWT
