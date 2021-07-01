const mongoose = require('mongoose') //call mongoose
const MongoDB_URL = 'mongodb+srv://daehyeon:skagnlfud0922@ojt.broz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MongoDB_URL,{useNewUrlParser : true} , (err)=>{
    if (err){
        console.log(err); //if there is an error, print the error
    } else {
        console.log("Connected to MongoDB");
    }
}); //connect to the MongoDB