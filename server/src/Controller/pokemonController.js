const mongoose = require('mongoose');
// const User = require('../model/userModel');
const Pokemons = require('../model/pokemonModel');

const addPokemon = async(req, res, next) => {
    console.log(req.body);
    const pokemon = req.body;
    const data = new Pokemons(pokemon);
    try{
        const pokemonDetails = await data.save()
        console.log(pokemonDetails);
        res.status(200).json(pokemonDetails);
    }catch(err){
        console.log('Create User Error : ', err);
    }
}

const getAllPokemons = async (req, res, next) => {
    try {
        const completeData = await Pokemons.find();
        // console.log(completeData);
        res.json(completeData);
    } catch (err) {
        console.log(err);
        // res.status(400).json('Error while getting all data');
    }
}

exports.addPokemon = addPokemon;
exports.getAllPokemons = getAllPokemons;