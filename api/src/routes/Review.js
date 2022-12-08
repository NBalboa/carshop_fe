const express = require("express");
const Database = require("../configs/Database");
const { route, use } = require("./User");
const router = express.Router();

router.get('/', async function (req,res) {
    const db = new Database();
    const conn = db.connection;

    await conn.connect((err) => {
        if(err) throw err;
        conn.query("SELECT * FROM reviews", (error, result) => {
            if(err) throw err;
            res.json(result)
        });
    })
})

router.post('/add', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    const {product_id, user_id, comment} = req.body
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ')


    const query = "INSERT INTO reviews(product_id, user_id, comment, created_at, updated_at) VALUES(?,?,?,?,?)"
    const values = [
        product_id,
        user_id,
        comment,
        date_now,
        date_now
    ]

    await conn.connect((err) => {
        if (err) throw err;
        conn.query(query, values, (err,result) => {
            if(err) throw err;
            console.log(result);
            res.json({message: "Review added successfully", success: true, other: "Zoren Gwapo"})
        })
    })
})


module.exports = router