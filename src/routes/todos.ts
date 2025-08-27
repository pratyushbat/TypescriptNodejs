 const route = require("express").Router();

let todos:any[] = [];

route.get("/", (req, res) => {
  res.send(todos);
});

route.post("/", (req, res) => {
  todos.push({ task: req.body.task });
  res.send(todos);
});

module.exports = route;
