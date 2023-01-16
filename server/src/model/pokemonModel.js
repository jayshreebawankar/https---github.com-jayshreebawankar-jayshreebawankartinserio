const mongoose = require('mongoose');
const {Schema} = mongoose;

const pokemons = new Schema({
    name : {type: String, require: true},
    attacks : {type: String, require: true},
    abilities : {type: String, require: true},
    image : {type: String, require: true},
})

const Pokemons = mongoose.model('Pokemons', pokemons);
module.exports = Pokemons;