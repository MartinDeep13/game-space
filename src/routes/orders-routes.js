const express = require('express');
const ordersController = require('../controllers/orders-controller');

const router = express.Router();

router.post('/create', ordersController.create);
router.get('/getOrders', ordersController.getOrders);
router.post('/updateOrder', ordersController.updateOrder);
router.post('/getTotal', ordersController.getTot);
module.exports = router;