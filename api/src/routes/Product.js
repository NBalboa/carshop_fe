const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();

router.get('/', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    await conn.connect((err) => {
        if(err) throw err;
        conn.query("SELECT * FROM products", (error, result) => {
            if(err) throw err;
            res.json(result)
        });
    })
})

router.post('/add', async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    const {name,brand,price,description,stocks,featured, thumbnails,category} = req.body

    const query = "INSERT INTO products(name, brand,price,description,stocks,featured,thumbnails,category, created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)"
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const values = [
        name,
        brand,
        price,
        description,
        stocks,
        featured,
        JSON.stringify(thumbnails),
        category,
        date_now,
        date_now
    ]
    // res.json(thumbnails)
    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err,result) => {
            if(err) throw err;
            console.log(result);
            res.json({message: 'Product added to the database'})
        })
    })
})

router.put('/edit/:id', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    const {id} = req.params
    const {name,brand,price,description,stocks,featured, thumbnails,category} = req.body
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query = "UPDATE products SET name = ?, brand = ?, price = ?, description = ?, stocks = ?, featured = ?, thumbnails = ?, category = ?, updated_at = ? WHERE id = ?"
    const values = [
        name,
        brand,
        price,
        description,
        stocks,
        featured,
        JSON.stringify(thumbnails),
        category,
        date_now,
        id
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err, result) => {
            if(err) throw err;
            console.log(result)
            res.json({message: "Product updated successfully"});
        })
    })

})

router.delete('/delete/:id', async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    const {id} = req.params
    const query = "DELETE FROM products WHERE id = ?"



    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,id,(err,result) => {
            if(err) throw err;
            console.log(result)
            res.json({message: "Product deleted succesfully"})
        })
    })
})

module.exports = router