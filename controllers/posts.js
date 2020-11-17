const express = require('express');

const router = express.Router();

const Posts=require('../models/post')

router.get('/', (req, res, next) => {
	Posts.find()
		.then((posts) => res.json(posts))
		.catch(next);
});
 router.post('/',(req,res,next)=>{
     const postData=req.body
     Posts.create(postData)
     .then((post)=>res.status(201).json(post))
     .catch(next)
 })

module.exports=router