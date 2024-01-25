import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("C'mon!");
});

app.listen(port, () => {
  console.log(`Server listening ${port}!`);
});
