const express = require("express");
const Database = require("../configs/Database");
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


module.exports = router