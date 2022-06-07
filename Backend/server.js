var express=require('express')
var path=require('path')
var app=express()
var Port=3000

app.use(express.static(path.join(__dirname,"../build")))
app.use('/',require(path.join(__dirname,"/Routes/router")))


app.listen(Port,function(){
console.log('Server is running on Port :' ,Port)
})

