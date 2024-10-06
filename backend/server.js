const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./mongodb/db_connect');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Schemas 
const User = require('./mongodb/schemas/User.js');


connectDB();

// Middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/auth-spotify', async (req, res) => {
    const { refresh_token, access_token, spotifyId, displayName, uri } = req.body;
    try {
        const user = await User.findOne({ spotifyId });
        if (!user) {
        // check if spotifyId already exists
            const newUser = new User({ spotifyId: spotifyId, displayName: displayName, refreshToken: refresh_token, accessToken: access_token, uri: uri });
            await newUser.save();
        } 

        res.status(201).json(user);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});