const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();


const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
  // Assuming `req.user` contains the user information you want to return
  res.status(200).json({
    message: 'This is a protected route',
    user: {
      id: req.user.id,
      username: req.user.username, // Include additional fields as needed
      email: req.user.email,
      age: req.user.age
    }
  });
});

// User Registration
router.post('/register', async (req, res) => {
  const { username, email, password, age } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
    
  const newUser = new User({ username, email, password: hashedPassword, age });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ 
      id: user._id, 
      username: user.username, 
      email: user.email, 
      age: user.age 
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;