const express = require('express');
const route = express.Router();
const pokemonController = require('../Controller/pokemonController.js')

route.post('/add', pokemonController.addPokemon);
route.get('/', pokemonController.getAllPokemons);

module.exports = route;