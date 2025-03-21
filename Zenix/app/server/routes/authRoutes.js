// server/routes/authRoutes.js
const express = require('express');

const { login, register } = require('../controllers/AuthController');
const router = express.Router();


// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

module.exports = router;
