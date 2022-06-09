const mongoose = require('mongoose');
<<<<<<< HEAD
const mongouri="mongodb+srv://Roshanac:kali@cybergeek.vlnmz.mongodb.net/?retryWrites=true&w=majority";
=======
const mongouri='mongodb+srv://Roshanac:kali@cybergeek.vlnmz.mongodb.net/?retryWrites=true&w=majority';
>>>>>>> fa7a357d961323cb782ffdc86d540843a1f40bb8

const MongoConnect=()=>{
    mongoose.connect(mongouri,()=>{
        console.log('mongodb is connected successfully')
    })
}

module.exports=MongoConnect;
