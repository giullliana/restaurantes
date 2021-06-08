const express = require('express');
const router = express.Router();


//pegar um restaurante do DB
router.get('/restaurantes', function(req,res){
    res.send({type: 'GET'});
});

//add um restaurante ao DB
router.post('/restaurantes', function(req,res){
    console.log(req.body);
    res.send({
        type: 'POST',
    name:req.body.name,
    rank:req.body.rank
});
});

//atualizar um restaurante no DB
router.put('/restaurantes/:id', function(req,res){
    res.send({type: 'PUT'});
});

//deletar um restaurante do DB
router.delete('/restaurantes/:id', function(req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;