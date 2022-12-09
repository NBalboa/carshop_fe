const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./configs/Database");
const path = require('path')
const multer = require('multer')
const fs = require('fs')

const cors = require("cors");
require("dotenv/config");
const app = express();
const userRoutes = require('./routes/User')
const productRoutes = require('./routes/Product')
const reviewRoutes = require('./routes/Review');
const upload = multer({dest: "./uploads"}) 

app.use(express.static('public'))
app.use("/images",express.static('uploads'))
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/review', reviewRoutes)



app.post("/api/upload", upload.single("avatar"), async (req, res) => {
    let fileType = req.file.mimetype.split('/')[1]
    console.log('file type', fileType)
    let newFileName = req.file.filename + '.' + fileType;
    console.log(newFileName);
    fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, function(err){
        if(err) throw err;
        console.log("Success rename")
    })

    const db = new Database();
    const conn = db.connection;

    const {name,brand,price,description,stocks,featured,category} = req.body

    const query = "INSERT INTO products(name, brand,price,description,stocks,featured,category,main_image, created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)"
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const values = [
        name,
        brand,
        parseFloat(price),
        description,
        parseInt(stocks),
        featured,
        category,
        `images/${newFileName}`,
        date_now,
        date_now
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err,result) => {
            if(err) throw err;
            console.log(result);
            res.json({data: 'Product added to the database'})
        })
    })
});


app.listen(3000, function() {
    const db = new Database();
    db.TestConnection();
    console.log("Server running on 3000")
})