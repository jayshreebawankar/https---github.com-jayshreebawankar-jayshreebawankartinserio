const mongoose = require('mongoose');
const User = require('../model/userModel');

const createUser = async(req, res, next) => {
    console.log(req.body);
    const user = req.body;
    const data = new User(user);
    try{
        const userDetails = await data.save()
        console.log(userDetails);
        res.status(200).json(userDetails);
    }catch(err){
        console.log('Create User Error : ', err);
    }
}

const getAllUsers = (req, res, next) => {
    res.send('i am best');
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;