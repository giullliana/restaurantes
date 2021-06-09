const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/restaurantesgo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json())

//inicio das rotas
app.use('/api',require('./routes/api'));

app.get('/api',function(req,res){
    console.log('GET request');
    res.send({name:'Mcdonalds'});
});



//listen for requests
app.listen(process.env.port ||4000,function(){
    console.log('now listening for requests');
});