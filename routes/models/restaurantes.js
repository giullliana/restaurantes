const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//creategeolocation Schema 
const GeoSchaema = new Schema({
    type: {
    type: String,
    default: "Point"
    },
    coordinates: {
        type : [Number],
        index:"2dsphere"

    }
});

//criando um Schema e model
const RestaurantesSchema = new Schema({
    name:{
        type: String,
        required: [true,'O campo nome é Obrigatório']
    },
    rank:{
        type: String,
    },
    // adicionando geolocalização
    address: GeoSchaema,
      
});


const Restaurantes = mongoose.model('restaurantes',RestaurantesSchema);

module.exports = Restaurantes;
