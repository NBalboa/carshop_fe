const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();
const bcrypt = require('bcrypt')
// const Validation = require('../middleware/Validation')
const {body, validationResult} = require('express-validator');

//registration validation
const registerValidation = [
    body('first_name').not().isEmpty().withMessage("First name is required").trim().escape(),
    body('last_name').not().isEmpty().withMessage("Last name is required").trim().escape(),
    body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match")
]

//change password validation
const changePasswordMatch = [
    body('old_password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.confirm_old_password).withMessage("The passwords do not match"),
    body('new_password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.confirm_new_password).withMessage("The passwords do not match")
    
]
//login validation
const loginValidation = [
    body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match")
]

// get all users cc: testing purposes if the api works
router.get("/", async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    await conn.connect((err) => {
        if(err) throw err;
        conn.query("SELECT * FROM users", (error, result) => {
            if(err) throw err;
            res.json(result)
        });
    })
})
// get user by id
router.get('/:id', async function(req,res) {
    const db = new Database();
    const conn = db.connection;
    const {id} = req.params
    await conn.connect((err) => {
        if(err) throw err;
        conn.query("SELECT * FROM users WHERE id = ?",[id] ,(error, result) => {
            if(err) throw err;
            res.json(result)
        });
    })
})

router.post("/add", ...registerValidation ,async function(req,res) {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const db = new Database();
    const conn = db.connection;

    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query = "INSERT INTO users(`first_name`, `last_name`, `email`, `password`,`role`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?)";
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 10),
        "normal",
        date_now,
        date_now
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err,result) => {
            if(err){
                if(err.code === 'ER_DUP_ENTRY'){
                    return res.json({message: "Email already exist", success: false})
                }
                else{
                    throw err;
                }
            }
            
            console.log(result)
            return res.json({message: "New User has been Registerd"})
        })
    })
});


router.put('/edit/profile/:id', ...changePasswordMatch ,async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');


    const query = "UPDATE users SET first_name = ?, last_name = ?, email = ?, updated_at = ? WHERE id = ?"

    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        date_now,
        req.params.id
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err,result) =>{
            if(err) {
                if(err.code === 'ER_DUP_ENTRY'){
                    return res.json({message: "Email already exist", success: false})
                }
                else{
                    throw err;
                }
            };
            console.log(result)
            return res.json({message: "Profile Updated", success: true})
        })
    })

})

router.put('/change_password/:id', ...changePasswordMatch ,async function(req,res) {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const db = new Database();
    const conn = db.connection;

    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const {old_password, confirm_old_password, new_password, confirm_new_password} = req.body
    const {id} = req.params

    const query = "UPDATE users SET password = ?, updated_at = ? WHERE id = ?"
    const values = [
        bcrypt.hashSync(new_password, 10),
        date_now,
        id
    ]

    await conn.connect((err) => {
        if (err) throw err;
        conn.beginTransaction((err) => {
            conn.query("SELECT * FROM users WHERE id = ?", [id], (err,result) => {
                if(err) {
                    return conn.rollback(function () {
                        throw err;
                    })
                }
                console.log(result)

                if(result.length > 0 && bcrypt.compareSync(old_password, result[0].password)) {
                    conn.query(query,values, (err, result) => {
                        if (err) {
                            return conn.rollback(function () {
                                throw err;
                            });
                        }
                        conn.commit((err) => {
                            if(err){
                                return conn.rollback(() => {
                                    console.log("Error", err.sqlMessage);
                                    throw err;
                                })
                            }
                        })

                        res.json({message: "Password changed successfully", success: true})
                    })
                }
            })
        })
    })
})

router.post('/login', ...loginValidation ,async function(req,res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const db = new Database();
    const conn = db.connection;

    const query = "SELECT * FROM users WHERE email = ?";
    const values = [
        req.body.email,
    ]

    await conn.connect((err) => {
        if (err) throw err;
        conn.query(query, values, (err, result) => {
            if(err) throw err;
            if(result.length > 0 && bcrypt.compareSync(req.body.password, result[0].password)){
                res.json({success: true, message: "Login Successful"})
            }
            else{
                res.json({success: false, message: "Login Failed"})
            }
        })
    })
});


module.exports = router;