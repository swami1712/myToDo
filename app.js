const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

var list = ["Eat food", "Make food", "Buy food"];
app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("index", { Kindofday: day, newList: list });
});

app.post("/", function (req, res) {
  item = req.body.inputName;
  list.push(item);
  res.redirect("/");
});
app.listen("3000", function () {
  console.log("server is started at port 3000");
});
