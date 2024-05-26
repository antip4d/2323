const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
// Импортируем вспомогательные функции
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkEmptyName, checkIsCategoryExists, updateCategory2 } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryById, sendCategoryDeleted } = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
// routes/categories.js
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    updateCategory2,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
); 
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
