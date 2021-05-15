require('dotenv').config();
const mongoose = require('mongoose')

function connectedToDB() {
    mongoose.connect(process.env.MONGO_URI , {useNewUrlParser : true, useCreateIndex :true, useUnifiedTopology :true})

    const connection = mongoose.connection
    connection.once('open', ()=>{
        console.log('Database connected..');
    }).catch(err =>{
        console.log(`Error occured during  connection ${err}`);
    })
}

module.exports  = connectedToDB ;