const mongoose = require('mongoose');
// const User = require('../model/userModel');
const Pokemons = require('../model/pokemonModel');

const createUser = async(req, res, next) => {
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
const getAllUsers = (req, res, next) => {
    res.send('i am best');
}
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;