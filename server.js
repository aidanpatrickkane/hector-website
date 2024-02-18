//server.js
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const uri = process.env.MONGODB_URI;

//connect to MongoDB
mongoose.connect(uri)
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection error:', err));;

const app = express();
app.use(bodyParser.json());

//Schema for orders
const orderSchema = new mongoose.Schema({
    email: String,
    orderId: String,
    orders: [{
        item: String,
        quantity: Number,
        price: Number
    }],
    orderDate: { type: Date, default: Date.now },
    totalPrice: Number
});

const Order = mongoose.model('Order', orderSchema);
//route for order submissions
app.post('/api/submitOrder', async (req, res) => {
    const { email, orders, totalPrice, orderId } = req.body; // Include all necessary properties

    const newOrder = new Order({
        orderId: orderId,
        email: email,
        orders: orders,
        totalPrice: totalPrice,
        orderDate: new Date() // You can remove this if default value is set in schema
    });

    try {
        await newOrder.save();
        res.json({ message: 'Order placed successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Error saving order' });
    }
});

//serve static html files
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});