const express = require('express');
const Posts = require('./posts-model');
const router = express.Router();

router.get('/:id', (req, res) => {
    Posts
        .getPostById(req.params.id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Failed to retrieve post from database.');
        })
})

module.exports = router;