const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

const {
    getUserRolesController,
    getUserRoleByIdController,
    getUserRolesByIdsController,
    createUserRoleController,
    createBulkUserRoleController,
    updateUserRoleByIdController,
    updateBalkUserRoleController,
    deleteUserRoleByIdController,
    deleteBulkUserRoleController,
    searchUserRoleController,
} = require("../controllers/userRoleController");

// Get user
router.get('/', requireAuth, getUserRolesController);
router.get('/:id', requireAuth, getUserRoleByIdController);
router.post('/by-ids', requireAuth, getUserRolesByIdsController);

// Create user
router.post('/', requireAuth, createUserRoleController)
router.post('/bulk-create', requireAuth, createBulkUserRoleController);

// Update user
router.put('/:id', requireAuth, updateUserRoleByIdController);
router.post('/bulk-update', requireAuth, updateBalkUserRoleController);

// Delete user
router.delete('/:id', requireAuth, deleteUserRoleByIdController);
router.delete('/bulk-delete', requireAuth, deleteBulkUserRoleController);

// Search user
router.post('/search', requireAuth, searchUserRoleController);

module.exports = router;
