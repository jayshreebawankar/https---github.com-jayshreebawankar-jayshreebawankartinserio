const asyncHandler = require('express-async-handler')
 mongoose = require('mongoose');
const User = require('../model/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Token = require('../model/tokemModel');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
}


const registerUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        // if (!email || !password) {
        //     res.status(400);
        //     throw new Error('Please fill required details...');
        // }

        // const userExist = await User.findOne({ email });
        // if (userExist) {
        //     res.status(400);
        //     throw new Error('Email already exist');
        // }

        // if (password.length > 8) {
        //     res.status(400);
        //     throw new Error('Password must be atmost 8 characters');
        // }

        //Create new user
        const user = await User.create({
            email,
            password
        });

        //Generate Token
        const token = generateToken(user._id);

        console.log(token);
        res.cookie('token', token, {
            path: '/',
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60),
            signed: true,
            sameSite: 'none',
        });

        if (user) {
            const { email, password } = user;
            res.status(201).json({ email, password, token });
        } else {
            res.status(400).json('Kindly fill up all data');
        }
    } catch (err) {
        console.log(err);
        // res.status(400).json('something wend wrong');
    }
}

const createUser = async(req, res, next) => {
    console.log(req.body);
    const user = req.body;
    const data = new User(user);

    //Generate Token
    const token = generateToken(user._id);

    console.log(token);
    res.cookie('token', token, {
        path: '/',
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        signed: true,
        sameSite: 'none',
    });

    try{
        const userDetails = await data.save()
        console.log(userDetails);
        res.status(200).json(userDetails, token);
    }catch(err){
        console.log('Create User Error : ', err);
    }
}

const loginUser = asyncHandler(async (req, res, next) => {
    // try {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please add email and password');
    }

    //Check if user exist
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400);
        throw new Error('User not found, Please signup');
    }

    //If user exist, check password
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        res.status(400);
        throw new Error('Incorrect Password');
    }

    //Generate Token
    const token = generateToken(user._id);

    res.cookie('token', token, {
        signed: true,
        path: '/',
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60),
        sameSite: 'none',
    });

    //send response
    if (user && checkPassword) {
        const { _id, email, password } = user;
        res.status(200).json({ _id, email, password, token });
    } else {
        res.status(400).json('Something went Wrong');
    }
    // }
    // catch (e) {
    //     console.log(e);
    // }
})

const loginStatus = asyncHandler(async (req, res, next) => {
    try {
        const token = req.signedCookies.token;
        if (!token) {
            return res.json(false);
        }

        //verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (verified) {
            return res.json(true);
        }
        return res.json(false);

    } catch (err) {
        res.send(err);
    }
})

const getAllUsers = async (req, res, next) => {
    try {
        const completeData = await User.find();
        // console.log(completeData);
        res.json(completeData);
    } catch (err) {
        console.log(err);
        // res.status(400).json('Error while getting all data');
    }
}

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getAllUsers = getAllUsers;
exports.loginStatus = loginStatus;