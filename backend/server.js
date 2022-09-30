const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const model = require('./usermodel')

app.use(cors());
app.use(express.json());

// mongoose.connect

app.listen('4000', () => console.log("Server started on port 4000"))