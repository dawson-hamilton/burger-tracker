const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
    console.log("GET")
    burger.all(function (result) {
        res.render("index", {
            burgers: result,
        });
    })
});

router.post("/api/burger", function (req, res) {
    console.log(req.body.name);
    burger.add([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json(result);
    })
})

router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("api/burger/delete/:id", function (req, res) {
    console.log("Req params ID: " + req.params.id)
    burger.delete(req.params.id, function (result) {
        res.redirect("/");
    });
});

module.exports = router;