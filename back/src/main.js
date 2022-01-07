const express = require("express");
const app = express();

app.use(express.json());

// CROSS ORIGIN REQUEST ENABLING.
const cors = require("cors");
app.use(cors());

const { addUser, selectUser } = require("./user");

// http://localhost:4000/users
app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "User Added Successfully" });
});

app.listen(4000, () => console.log("server started"));

// http://localhost:4000/hello
//app.get("/hello", (req, res) => {
//  res.json({ message: "hellooo" });
//});
