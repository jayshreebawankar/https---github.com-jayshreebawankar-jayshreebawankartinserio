const dotenv = require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const pokemonRoute = require('./routes/pokemonRoute');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/pokemon', pokemonRoute);
app.use('/user', userRoute);

mongoose.set("strictQuery", false);

mongoose
    .connect(
        process.env.MONGO_URI
    ).then(
    app.listen(PORT, ()=>{
        console.log(`Server Connected at Port ${PORT}`);
    })
    ).catch((e)=>console.log("Error in connection : ",e));