const express = require("express");
const app = express();
const port = process.env.PORT || 3001

app.get("/", (req, res) => {
  res.status(200).send("Express API");
});

const users = require('./routers/users-router')
app.use('/api/users', users)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
