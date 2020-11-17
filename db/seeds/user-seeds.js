const mongoose = require('../connection');
const User = require('../../models/user');
const userSeeds = require('./user-seeds.json');

User.deleteMany({})
	.then(() => {
		return User.insertMany(userSeeds);
    })
    .then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
    });
    
