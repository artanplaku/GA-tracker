const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const userRoutes = require('./routes/user')

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/user', userRoutes)

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost/tracker", mongooseConfig)


app.listen('4000', () => console.log("Server started on port 4000"))