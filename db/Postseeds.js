const mongoose =require('./connection')
const Post=require('../models/post')

const postSeeds=require('./Postseeds.json')

Post.deleteMany({})
.then(()=>Post.insertMany(postSeeds))
.then(console.log)
.catch(console.error)
.finally(()=>{
    process.exit()
})