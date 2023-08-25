// routes/index.js
const express = require('express');
// const publicRoutes = require('./public');
// const privateRoutes = require('./private');
const usersRoutes = require('./user');
const productsRoutes = require('./product');

const router = express.Router();

// Mount your route modules
// router.use('/public', publicRoutes);
// router.use('/private', privateRoutes);
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);

module.exports = router;