var express=require('express')
const MongoConnect=require('./db')
var path=require('path')
var app=express()
var Port=3000

//middleware to use json data
app.use(express.json())
app.use('/auth',require('./Routes/auth'))


app.listen(Port,function(){
console.log('Server is running on Port :' ,Port)
})

MongoConnect();
