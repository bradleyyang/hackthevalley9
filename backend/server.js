require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const LogEntry = require('./models/LogEntry');
const axios = require('axios');

const port = process.env.PORT || 8080

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Authentication routes
const authRoutes = require('./routes/auth');
const { post } = require("axios");
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
        const user = await User.findOne({ username: req.params.username });
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
        if (!(req.body.hasOwnProperty('safeFood') && req.body.hasOwnProperty('tags'))) {
            return res.status(400).send('No safeFood or tags provided for food');
        }
        let putResult = await User.findOneAndUpdate(
            { username: req.params.username },
            {
                $push: {
                    foods: {
                        name: req.params.food,
                        tags: req.body['tags'],
                        safeFood: req.body['safeFood']
                    }
                }
            },
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
            {
                $pull: {
                    foods: {
                        name: req.params.food
                    }
                }
            },
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
            { stats: userInfo['stats'] },
            { new: true }
        );
        const newLogEntry = new LogEntry({
            username: req.params.username,
            food: {
                name: req.params.food,
                tags: foodTags
            }
        })
        await newLogEntry.save();
        res.send(postResult);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error eating food', error });
    }
});


app.get('/users/:username/log', async (req, res) => {
    try {
        let logResults = await LogEntry.find({});
        res.send(logResults);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error getting log', error });
    }
});


// Route to count food log entries for a specific user
app.post('/logEntries/count', async (req, res) => {
    const { username } = req.body;

    // Check if username is provided
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        // Count the log entries for the given username
        const count = await LogEntry.countDocuments({ username });
        res.json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.post('/badges', async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }

        // Find the user by username and select only the badges field
        const user = await User.findOne({ username }).select('badges');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the badges data in the response
        res.status(200).json(user.badges);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.put('/logfood', async (req, res) => {
    const { username } = req.body;

    try {
        // Step 1: Find the user by username
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const index = Math.floor(Math.random() * 5) + 1;

        if (index == 1) {
            user.badges.explorer += 1;
        } else if (index == 2) {
            user.badges.foodConnoisseur += 1;
        } else if (index == 3) {
            user.badges.foodie += 1;
        } else if (index == 4) {
            user.badges.healthyEater += 1;
        } else {
            user.badges.masterChef += 1;
        }

        // Step 3: Save the updated user
        await user.save();

        res.status(200).send(user); // Send the updated user data back
    } catch (error) {
        res.status(500).send({ message: 'Error updating badges', error });
    }
});