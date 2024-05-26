
const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, checkIfUsersAreSafe, updateGame2 } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameById, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games",findAllGames,checkIsGameExists,checkIfCategoriesAvaliable,checkEmptyFields,checkAuth,createGame,sendGameCreated);

// Файл routes/games.js
gamesRouter.get("/games/:id", findGameById, sendGameById);
// Пока запишем порядок действий псевдокодом 
gamesRouter.put("/games/:id",findGameById,checkIfUsersAreSafe,checkIfCategoriesAvaliable,checkEmptyFields,checkAuth,updateGame,updateGame2,sendGameUpdated); 

gamesRouter.delete( "/games/:id",checkAuth, deleteGame,sendGameDeleted // 
);
module.exports = gamesRouter; 
