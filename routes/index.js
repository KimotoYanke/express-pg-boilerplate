const express = require("express");
const router = express.Router();
const users = require("./users");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", users);

module.exports = router;
