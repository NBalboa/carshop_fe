const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./configs/Database");
const path = require('path')
const multer = require('multer')

const cors = require("cors");
require("dotenv/config");
const app = express();
const userRoutes = require('./routes/User')
const productRoutes = require('./routes/Product')
const reviewRoutes = require('./routes/Review')
const upload = multer() 

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/review', reviewRoutes)



// app.post("/api/upload", upload.single("image"), (req, res) => {
//     const file = req.file;
//     // save file to server directory
//     const filePath = path.join(__dirname, 'public/images', file.filename);
//     // save file path to database
// });


app.listen(3000, function() {
    const db = new Database();
    db.TestConnection();
    console.log("Server running on 3000")
})