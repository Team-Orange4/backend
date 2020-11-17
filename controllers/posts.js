const express = require('express');

const router = express.Router();

const Posts=require('../models/post')

router.get('/', (req, res, next) => {
	Posts.find()
		.then((posts) => res.json(posts))
		.catch(next);
});


module.exports=router