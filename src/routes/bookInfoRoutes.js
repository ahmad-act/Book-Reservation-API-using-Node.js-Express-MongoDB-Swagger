const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();
const uploadFile = require('../lib/uploadFile');

const {
    getBookInfosController,
    getBookInfoByIdController,
    getBookInfosByIdsController,
    createBookInfoController,
    createBulkBookInfoController,
    updateBookInfoByIdController,
    updateBalkBookInfoController,
    deleteBookInfoByIdController,
    deleteBulkBookInfoController,
    searchBookInfoController,
} = require("../controllers/bookInfoController");

// Get book info
router.get('/', requireAuth, getBookInfosController);
router.get('/:id', requireAuth, getBookInfoByIdController);
router.post('/by-ids', requireAuth, getBookInfosByIdsController);

// Create book info
router.post('/', requireAuth, uploadFile.single('coverImage'), createBookInfoController)
router.post('/bulk-create', requireAuth, createBulkBookInfoController);

// Update book info
router.put('/:id', requireAuth, updateBookInfoByIdController);
router.post('/bulk-update', requireAuth, updateBalkBookInfoController);

// Delete book info
router.delete('/bulk-delete', requireAuth, deleteBulkBookInfoController); // Line order matters for same http method
router.delete('/:id', requireAuth, deleteBookInfoByIdController);


// Search book info
router.post('/search', requireAuth, searchBookInfoController);

module.exports = router;
