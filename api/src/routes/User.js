const { query } = require("express");
const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();

router.get("/", async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    await conn.connect((err) => {
        if(err) throw err;
        conn.query("SELECT * FROM students", (error, result) => {
            res.json(result)
        });
    })
})

router.put("/add",async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query = "INSERT INTO users(`first_name`, `last_name`, `email`, `password`,`role`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?)";
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password,
        "normal",
        date_now,
        date_now
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err,result) => {
            if(err) throw err;
            console.log(result)
            return res.json({message: "New User has been Registerd"})
        })
    })
});


router.post('/login', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]

    await conn.connect((err) => {
        if (err) throw err;
        conn.query(query, values, (err, result) => {
            if(err) throw err;
            if(result.length > 0){
                res.json({success: true, message: "Login Successful"})
            }
            else{
                res.json({success: false, message: "Login Failed"})
            }
        })
    })
});


module.exports = router;