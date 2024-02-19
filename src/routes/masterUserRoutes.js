const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

const {
    getMasterUsersController,
    getMasterUserByIdController,
    getMasterUsersByIdsController,
    createMasterUserController,
    createBulkMasterUserController,
    updateMasterUserByIdController,
    updateBalkMasterUserController,
    deleteMasterUserByIdController,
    deleteBulkMasterUserController,
    searchMasterUserController,
} = require("../controllers/MasterUserController");

// Get master user
router.get('/', requireAuth, getMasterUsersController);
router.get('/:id', requireAuth, getMasterUserByIdController);
router.post('/by-ids', requireAuth, getMasterUsersByIdsController);

// Create master user
router.post('/', requireAuth, createMasterUserController)
router.post('/bulk-create', requireAuth, createBulkMasterUserController);

// Update master user
router.put('/:id', requireAuth, updateMasterUserByIdController);
router.post('/bulk-update', requireAuth, updateBalkMasterUserController);

// Delete master user
router.delete('/bulk-delete', requireAuth, deleteBulkMasterUserController); // Line order matters for same http method
router.delete('/:id', requireAuth, deleteMasterUserByIdController);


// Search master user
router.post('/search', requireAuth, searchMasterUserController);

module.exports = router;
