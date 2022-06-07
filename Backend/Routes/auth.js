const express=require('express');
const router=express.Router();
const user=require('../models/Users')
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('firstname','firstname must be at least 3 characters').isLength({ min: 3 }),
    body('lastname','lastname must be atleast 3 character').isLength({ min: 3 }),
    body('email','Please enter a valid email address').isEmail(),
    body('password','Password must be minimum 6 character long').isLength({min:6})
],
async(req,res)=>{
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{

        let User=await user.findOne({email:req.body.email}).exec()
        if(User){
            return res.status(400).json({ errors: "User from this email already exist"});
        }
        User = await user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email:req.body.email,
            password:req.body.password
        })
        res.json({"successfull":"user updated to the database"})
    } catch(errors){
        console.log(errors.message);
        res.status(500).send("Some error occured")
    }
    
})

module.exports=router