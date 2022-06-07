const express=require('express');
const router=express.Router();
const user=require('../models/Users')

router.post('/',(req,res)=>{
const User=user(req.body)
User.save()
console.log(req.body);
})

module.exports=router