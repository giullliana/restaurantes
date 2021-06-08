const express = require('express');
const bodyParser = require('body-parser');


//set up express app
const app = express();

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