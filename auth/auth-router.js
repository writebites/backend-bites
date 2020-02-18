const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { jwtSecret } = require('../config/secrets');
const Users = require('../users/users-model');


// Register user 
router.post('/register', userPassCheck, (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 11);
    user.password = hash;

    Users
        .add(user)
        .then(id => {
            res.status(201).json({ message: 'Success!' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Error registering user to database.' });
        });
});

// Check for username and password before sending request to server
function userPassCheck(req, res, next) {
    const { username, password } = req.body;
    if (!password || !username) {
        res.status(400).json({ errorMessage: 'Invalid request. Please input both a username and password' });
    } else {
        next();
    }
}

module.exports = router;