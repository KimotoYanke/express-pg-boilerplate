const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res, next) => {
  db.user
    .findAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res, next) => {
  const user = { name: req.body.name };

  db.user.create(user).then(createdUser => {
    res.status(200).send(createdUser);
  });
});

module.exports = router;
