const express = require("express");

const router = express.Router();

let burger = require("../public/assets/js/script");

router.get("/", function (req, res) {
    res.render("index");
})

module.exports = router;