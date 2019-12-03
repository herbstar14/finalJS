const mongoose = require('mongoose');
module.exports=()=>{
    const connect = function(){
        mongoose.connect('mongodb://localhost:27017/admin',{
            dbname:'user_input',
    
    },(error)=>{
        if (error){
            console.log("mongoDB Error", error)

        }else{
            console.log("mongoDB connected")
        }//end else 

    })
    }
connect();
mongoose.connection.on('error',(error)=>{

    console.error('mongoDB error', error)
})


mongoose.connection.on('disconnected', ()=>{

console.error('disconnected MongoDb, try re-connect')
connect();

})

}
