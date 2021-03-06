const express = require('express');
const ordersController = require('../controllers/orders-controller');

const router = express.Router();

router.post('/create', ordersController.create);
router.get('/getOrders', ordersController.getOrders);
router.post('/getOrdersDetails', ordersController.getOrdersDetails);
router.post('/updateOrder', ordersController.updateOrder);
router.post('/getTotal', ordersController.getTot);
router.get('/getOneOrder/:id', ordersController.getOneOrder);
router.get('/getCountOrders', ordersController.getCountOrders);
router.post('/refound', ordersController.setOrderRefund);
router.post('/getOrdersProfitPerYear', ordersController.getOrdersProfitPerYear);
router.get('/getrefound', ordersController.getRefunds);
module.exports = router;