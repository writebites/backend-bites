const express = require("express");
const Users = require("./users-model.js");
const router = express.Router();

router.post("/", (res, req) => {
  Users.add(req.body)
    .then((user) => {
      console.log(user);
      res.status(200).json("User successfully added to database.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Error adding user to database.");
    });
});

module.exports = router;
