const express = require("express");
const app = express();
const port = process.env.PORT || 3001

const users = require("./db/users.json");

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Start server on port ${port}!`);
});
