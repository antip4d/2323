// Создаём роут для запросов пользователей const 
usersRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
// Импортируем вспомогательные функции 
const {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, filterPassword, hashPassword} = require('../middlewares/users'); 
const {sendAllUsers, sendUserCreated, sendUserUpdated, sendUserById, sendUserDeleted, sendMe} = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users' 
usersRouter.get('/users', findAllUsers, filterPassword,sendAllUsers);
// routes/users.js
// routes/users.js

usersRouter.post("/users",findAllUsers,checkIsUserExists,checkEmptyNameAndEmailAndPassword,checkAuth,hashPassword,createUser,sendUserCreated);

usersRouter.get("/users/:id", findUserById,filterPassword, sendUserById);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
); 
usersRouter.get("/me", checkAuth, sendMe);
// Экспортируем роут для использования в приложении — app.js 
module.exports = usersRouter;

