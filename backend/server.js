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

// Authentication routes
const authRoutes = require('./routes/auth');
const {post} = require("axios");
app.use('/api/auth', authRoutes);

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



// Error handling
app.get('/users', async (req, res) => {
    return res.status(400).send('Error 400: Please supply a username.')
});

app.post('/users', async (req, res) => {
    return res.status(400).send('Error 400: Please supply a username.')
});

app.put('/users', async (req, res) => {
    return res.status(400).send('Error 400: Please supply a username.')
});

app.delete('/users', async (req, res) => {
    return res.status(400).send('Error 400: Please supply a username.')
});




// User routes

app.get('/users/:username', async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/users/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const { password, email, age } = req.body;
        const newUser = new User({ username, password, email, age });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating user', error });
    }
});


// Food routes

app.post('/users/:username/:food', async (req, res) => {
    try {
        if(!(req.body.hasOwnProperty('safeFood') && req.body.hasOwnProperty('tags'))) {
            return res.status(400).send('No safeFood or tags provided for food');
        }
        let putResult = await User.findOneAndUpdate(
            { username: req.params.username }, 
            { $push: { foods: {
                name: req.params.food,
                tags: req.body['tags'],
                safeFood: req.body['safeFood']
            } } }, 
            { new: true }
        );
        res.send(putResult);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error modifying user', error });
    }
});


app.delete('/users/:username/:food', async (req, res) => {
    try {
        let deleteResult = await User.findOneAndUpdate(
            { username: req.params.username }, 
            { $pull: { foods: {
                name: req.params.food
            } } },
            { new: true }
        );

        res.send(deleteResult);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error modifying user', error });
    }
});


app.post('/users/:username/:food/eat', async (req, res) => {
    try {
        let userInfo = await User.findOne({ username: req.params.username });
        let foodTags = userInfo['foods'].find(f => {
            return f['name'] === req.params.food;
        })['tags'];
        foodTags.forEach(tag => {
            userInfo['stats'][tag + 'Count']++;
        });
        let postResult = await User.findOneAndUpdate(
            { username: req.params.username },
            { stats: userInfo['stats']  },
            { new: true }
        );
        res.send(postResult);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error eating food', error });
    }
});
