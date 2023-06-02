const mongoose = require('mongoose');

const uri = 'mongodb+srv://kapishverma:MAUEQf9oUOqHESe1@kapish.ag7x6wb.mongodb.net/kapish?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
     console.log('Connected to Database: MongoDB Atlas');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

module.exports = db;