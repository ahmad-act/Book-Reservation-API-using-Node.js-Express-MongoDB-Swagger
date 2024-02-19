const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();
const uploadFile = require('../lib/uploadFile');

const {
    getUsersController,
    getUserByIdController,
    getUsersByIdsController,
    createUserController,
    createBulkUserController,
    updateUserController,
    updateBalkUserController,
    deleteUserController,
    deleteBulkUserController,
    searchUserController,
    loginUserController,
    logoutUserController,
    registerUserController,
    checkUserController,
} = require("../controllers/userController");



// Get user
router.get('/', requireAuth, getUsersController);
router.get('/:id', requireAuth, getUserByIdController);
router.post('/by-ids', requireAuth, getUsersByIdsController);

// Create user
router.post('/', requireAuth,  uploadFile.single('photo'), createUserController)
router.post('/bulk-create', requireAuth, createBulkUserController);

// Update user
router.put('/:id', requireAuth, updateUserController);
router.post('/bulk-update', requireAuth, updateBalkUserController);

// Delete user
router.delete('/bulk-delete', requireAuth, deleteBulkUserController); // Line order matters for same http method
router.delete('/:id', requireAuth, deleteUserController);


// Search user
router.post('/search', requireAuth, searchUserController);

// Authentication
router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.post('/logout', logoutUserController);
router.post('/check', checkUserController);

module.exports = router;
