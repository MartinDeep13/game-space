const express = require('express');
const ordersController = require('../controllers/orders-controller');

const router = express.Router();

router.post('/create', ordersController.createOrderDetails);

module.exports = router;