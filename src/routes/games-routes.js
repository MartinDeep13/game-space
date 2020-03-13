const express = require('express');
const gamesController = require('../controllers/games-controller');

const router = express.Router();

router.post('/create', gamesController.createGame);
router.get('/get-games', gamesController.getGames);
router.get('/get-games-category/:category', gamesController.getGamesbyCategory);

module.exports = router;