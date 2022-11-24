const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./configs/Database");
const cors = require("cors");
require("dotenv/config");
const app = express();
const userRoutes = require('./routes/User')

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use('/api/user', userRoutes)


app.listen(3000, function() {
    const db = new Database();
    db.TestConnection();
    console.log("Server running on 3000")
})