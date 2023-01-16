const mongoose = require('mongoose');
const {Schema} = mongoose;

const pokemons = new Schema({
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true,
        // trim: true,
        // match: [
        // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        // 'invalid email'],
    },
    password: {
        type: String,
        require: [true, 'password is required'],
        // minLength: [8, 'password must contains 8 characters'],
        // maxLength: [8, 'password must contains 8 characters'],
    },
})

const Pokemons = mongoose.model('Pokemons', pokemons);
module.exports = Pokemons;