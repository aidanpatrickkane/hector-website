//server.js
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bode-parser');

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/emailDB', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

//Schema for email addresses
const emailSchema = new mongoose.Schema({ email: String });
const Email = mongoose.model('Email', emailSchema);

//route to handle submissions
app.post('/api/subscribe', (req, res) => {
    const newEmail = new Email({ email: req.body.email });
    newEmail.save()
        .then(() => res.json({ message: 'Email saved successfully!' }))
        .catch(error => res.status(400).json({ error }));
});

//serve static html files
app.use(express.static(''));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});