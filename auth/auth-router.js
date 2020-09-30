const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { jwtSecret } = require("../config/secrets");
const Users = require("./auth-model");

// Register user
router.post("/register", userPassCheck, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 11);
  user.password = hash;

  Users.add(user)
    .then((id) => {
      const token = signToken(user);
      res
        .status(201)
        .json({ message: "Successfully registered user to database." });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "Error registering user to database." });
    });
});

// User login
router.post("/login", userPassCheck, (req, res) => {
  const { username, password } = req.body;

  Users.findByUsername(username)
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ errorMessage: "Invalid credentials." });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "Database error while logging in." });
    });
});

// Check for username and password before sending request to server
function userPassCheck(req, res, next) {
  const { username, password } = req.body;
  if (!password && !username) {
    res.status(400).json({
      errorMessage: "Invalid request. Please input a username and password.",
    });
  } else if (!username) {
    res
      .status(400)
      .json({ errorMessage: "Invalid request. Please input a username." });
  } else if (!password) {
    res
      .status(400)
      .json({ errorMessage: "Invalid request. Please input a password." });
  } else {
    next();
  }
}

function signToken(user) {
  const payload = {
    id: user.id,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
