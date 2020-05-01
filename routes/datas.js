const express = require('express');
const router = express.Router();
const Post = require('../models/Reg');

router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(error){
        res.json({message:error});
    }
});

router.post('/', async(req, res) =>{
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        post.save();
        res.json(post);
    }catch(error){
        res.json({message:error});
    }
});

router.get('/:postId', async(req,res) =>{
    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    }catch(error){
        res.json({message:error});
    }
    
});

router.delete('/:postId', async(req,res) =>{
    
    try{
        const postRemove = await Post.remove({_id: req.params.postId});
        res.json(postRemove);
    }catch(error){
        res.json({message:error});
    }   
});

router.patch('/:postId', async(req, res) =>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatePost);
    }catch(error){
        res.json({message:error});
    }   
});



module.exports = router;