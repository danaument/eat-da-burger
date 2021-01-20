var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
  let result = await burger.all();
  console.log(result);
  result = result.map(v => Object.assign({}, v));
  let resultObj = {
    burgers: result
  };
  console.log(resultObj);
  res.render("index", resultObj);
});

router.post("/api/burgers", async function(req, res) {
  console.log(req.body.burger_name, req.body.devoured);
  let result = await burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);
  res.json({ id: result.insertId });
});

// router.put("/api/cats/:id", async function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", async function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
