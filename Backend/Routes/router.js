const express=require('express')
const router = express.Router()
const path=require('path')
const blogs=require('../blogs/blogs')






//routing
router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
    // blogs.forEach(e=>{
        
        
    // });
})

router.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/blog.html"))
//   res.render(blogs)
})
router.get('/blog/:slug',(req,res)=>{
   myBlogs= blogs.filter((e)=>{
       return e.slug == req.params.slug
    })
    res.sendFile(path.join(__dirname,"../public/blog.html"))
})


module.exports=router