require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/Food');
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


// Routes
// app.post('/foods', async (req, res) => {
//     const food = new Food(req.body);
//     await food.save();
//     res.send(food);
// });

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
    const filter = { name: "Orange" }; // Adjust this if necessary

    // Options to create a new document if no documents match the filter
    const options = { upsert: true };

    // Document to set/update
    const updateDoc = {
        $set: {
            name: "Pineapple" // This is what the document will be updated/created as
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