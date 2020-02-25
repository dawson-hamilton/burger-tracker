const express = require("express");

const router = express.Router();

let burger = require("../public/assets/script.js");

router.get("/", function (req, res) {
    res.render("index");
})

module.exports = router;