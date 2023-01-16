const express = require('express');
const route = express.Router();
const pokemonController = require('../Controller/pokemonController.js')

route.get('/',(req, res)=> {
    res.send('jausree')
})
route.post('/add', pokemonController.addPokemon);
route.get('/', pokemonController.getAllPokemons);

module.exports = route;