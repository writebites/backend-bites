const express = require('express');
const Posts = require('./posts-model');
const router = express.Router();

router.post('/', postValidation, (req, res) => {
    Posts
        .add(req.body)
        .then(post => {
            console.log(post)
            res.status(200).json('Post successfully added to database.')
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('Failed to add post to database.')
        })
})

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

router.get('/', (req, res) => {
    Posts
        .getUserIdByUsername(req.body.username)
        .then(obj => {
            Posts
            .getPostsByUserId(obj.id)
            .then(posts => {
                console.log(posts)
                res.status(200).json(posts)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json('Failed to retrieve posts from given user id.')
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('Failed to retrieve id from username.')
        })
})


// middleware
function postValidation(req, res, next){
    if (req.body.user_id && req.body.title && req.body.body) {
        next();
    } else {
        res.status(400).json('User_id, title, and body are required for this post request.')
    }
}

module.exports = router;