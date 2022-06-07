const mongoose = require('mongoose');
const mongouri="mongodb://localhost:27017/cybergeek";

const MongoConnect=()=>{
    mongoose.connect(mongouri,()=>{
        console.log('mongodb is connected successfully')
    })
}

module.exports=MongoConnect;
