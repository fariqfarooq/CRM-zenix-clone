// server/index.js
// require("dotenv").config();
require('dotenv').config({ path: '/Users/fariqfarooq/Zenix-cl/CRM-zenix-clone-1/Zenix/.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes');


const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
  }));

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(express.json());


app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
//express server and its components only demonstrated in this file. not in use in the project for serverless functions