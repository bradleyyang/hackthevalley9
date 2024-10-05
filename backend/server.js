require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/Food');
const Badge = require('./models/Badge');
const User = require('./models/User');
const axios = require('axios');

const port = process.env.PORT || 8080

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());

// STILL NEED TO ADD MORE ROUTES FOR SCHEMAS OTHER THAN FOODS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



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








// Food routes
app.get('/foods', async (req, res) => {
    try {
        const food = await Food.find({});
        res.send(food);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/foods', async (req, res) => {
    const query = { name: "Apple" };
    const deleteResult = await Food.deleteOne(query);
    res.send(deleteResult);
});


app.put('/foods', async (req, res) => {
    const { name, type, isFearFood, isSafeFood } = req.body; // Extract data from the request body

    const filter = { name: req.body.oldName }; // Match the document by its current name (e.g., "Orange")
    const options = { upsert: true, new: true }; // Upsert creates if no match is found

    // Document to set/update
    const updateDoc = {
        $set: {
            name: name || "Pineapple", // Defaults to "Pineapple" if no name provided
            type: type || "fruit", // Defaults to "fruit"
            isFearFood: isFearFood || false,
            isSafeFood: isSafeFood || false,
        },
    };

    try {
        const updateResult = await Food.updateOne(filter, updateDoc, options);

        // Send appropriate response
        if (updateResult.matchedCount > 0) {
            res.send({ message: "Document updated", result: updateResult });
        } else {
            res.send({ message: "Document created", result: updateResult });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error updating the document", error });
    }
});


// Create a new food item
app.post('/foods', async (req, res) => {
    const { name } = req.body; // Destructure the name from the request body

    try {
        // Create a new food item
        const newFood = new Food({ name });
        const savedFood = await newFood.save(); // Save to the database
        res.status(201).send(savedFood); // Respond with the created item and status 201
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating food item', error });
    }
});






// Badges routes
app.get('/badges', async (req, res) => {
    try {
        const badge = await Badge.find({});
        res.send(badge);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/badges', async (req, res) => {
    const query = { title: "Badge1" };
    const deleteResult = await Badge.deleteOne(query);
    res.send(deleteResult);
});







// User routes
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
    const { username, password, email, ageGroup, safeFoods, fearFoods } = req.body;

    try {
        const newUser = new User({ username, password, email, ageGroup, safeFoods, fearFoods });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating user', error });
    }
});
