const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use('/users', require("./routes/users.route"));
app.use('/companies', require("./routes/companies.route"));
app.use('/events', require("./routes/events.route"));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});