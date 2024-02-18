# Fresh House Foods

## Overview

Fresh House Foods is an online food ordering platform designed to bring fresh produce right to your doorstep. With an intuitive interface for quantity selection and dynamic search functionality, customers can easily customize their order.

## Features

- Dynamic search bar for filtering produce based on user input.
- Interactive shopping cart where users can specify the quantity of each item.
- Temporary session storage of order details during the shopping experience.
- Final user email input triggers the storage of order details into a MongoDB database.

## Usage

To use Fresh House Foods, navigate to the live website. From there, you can:

1. Use the search bar to find specific produce items.
2. Enter the quantity for each item you wish to order and add them to your cart.
3. Review your cart, proceed to checkout, and enter your email address to complete your order.

## How It Works

The website utilizes a temporary server to store order details as customers shop. Upon checkout, customers are prompted to input their email, which then sends their order along with their email to a MongoDB database for order tracking and management.

## Contribution

This project is the sole creation of one developer, who managed the full stack from front-end design to back-end database management.

## Technical Details

- Front-end designed with HTML, CSS, and JavaScript.
- Back-end services written in Node.js, with Express.js as the server framework.
- MongoDB used for database services, with Mongoose as the ODM.
- Application deployed on Heroku, integrated with MongoDB Atlas.

## Security

The application implements best practices for security, ensuring user data is protected throughout the ordering process.

## Contact

For more information or support, please contact apk14961@uga.edu.
