const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

const {
    getBookCategoriesController,
    getBookCategoryByIdController,
    getBookCategoriesByIdsController,
    createBookCategoryController,
    createBulkBookCategoryController,
    updateBookCategoryByIdController,
    updateBalkBookCategoryController,
    deleteBookCategoryByIdController,
    deleteBulkBookCategoryController,
    searchBookCategoryController,
} = require("../controllers/bookCategoryController");

// Get book category
router.get('/', requireAuth, getBookCategoriesController);
router.get('/:id', requireAuth, getBookCategoryByIdController);
router.post('/by-ids', requireAuth, getBookCategoriesByIdsController);

// Create book category
router.post('/', requireAuth, createBookCategoryController)
router.post('/bulk-create', requireAuth, createBulkBookCategoryController);

// Update book category
router.put('/:id', requireAuth, updateBookCategoryByIdController);
router.post('/bulk-update', requireAuth, updateBalkBookCategoryController);

// Delete book category
router.delete('/bulk-delete', requireAuth, deleteBulkBookCategoryController); // Line order matters for same http method
router.delete('/:id', requireAuth, deleteBookCategoryByIdController);


// Search book category
router.post('/search', requireAuth, searchBookCategoryController);

module.exports = router;
