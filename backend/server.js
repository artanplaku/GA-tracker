const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const model = require('./usermodel')

app.use(cors());
app.use(express.json());

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost/tracker",mongooseConfig)


app.get("/", (req, res) => {
  res.json("hello world")
})

app.post("/api/register", async (req, res) => {
   try{
  const user = await model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" })
   } catch(err){

    res.json ({ status: "Duplicate Email" })

   }
  });

app.listen('4000', () => console.log("Server started on port 4000"))