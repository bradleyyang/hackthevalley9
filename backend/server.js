require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const axios = require('axios');

const port = process.env.PORT || 8080

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database')
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })








// User routes
app.get('/users', async (req, res) => {
    try {
        const user = await User.find({});
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users', async (req, res) => {
    try {
        if(!req.query.hasOwnProperty('username')) {
            return res.status(400).send('Error 400: Please supply a username.')
        }
        const user = await User.find({username: req.query['username']});
        res.send(user[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/users', async (req, res) => {
    const query = { username: req.body['username'] };
    const deleteResult = await User.deleteOne(query);
    res.send(deleteResult);
});

app.post('/users', async (req, res) => {
    const { username, password, email, ageGroup } = req.body;
    try {
        const newUser = new User({ username, password, email, ageGroup });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating user', error });
    }
});