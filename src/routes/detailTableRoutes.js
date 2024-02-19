const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

const {
    getDetailTablesController,
    getDetailTableByIdController,
    getDetailTablesByIdsController,
    createDetailTableController,
    createBulkDetailTableController,
    updateDetailTableByIdController,
    updateBalkDetailTableController,
    deleteDetailTableByIdController,
    deleteBulkDetailTableController,
    searchDetailTableController,
} = require("../controllers/DetailTableController");

// Get detail table
router.get('/', requireAuth, getDetailTablesController);
router.get('/:id', requireAuth, getDetailTableByIdController);
router.post('/by-ids', requireAuth, getDetailTablesByIdsController);

// Create detail table
router.post('/', requireAuth, createDetailTableController)
router.post('/bulk-create', requireAuth, createBulkDetailTableController);

// Update detail table
router.put('/:id', requireAuth, updateDetailTableByIdController);
router.post('/bulk-update', requireAuth, updateBalkDetailTableController);

// Delete detail table
router.delete('/bulk-delete', requireAuth, deleteBulkDetailTableController); // Line order matters for same http method
router.delete('/:id', requireAuth, deleteDetailTableByIdController);


// Search detail table
router.post('/search', requireAuth, searchDetailTableController);

module.exports = router;
