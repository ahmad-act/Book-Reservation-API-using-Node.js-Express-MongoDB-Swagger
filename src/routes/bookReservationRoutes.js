const express = require("express");
const { requireAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

const {
    getBookReservationsController,
    getBookReservationByIdController,
    createBookReservationController,
    updateBookReservationByIdController,
    deleteBookReservationByIdController,
    searchBookReservationController,
    getAvailableBookController,
    getReservedBookController,
} = require("../controllers/bookReservationController");

// Extra methods
router.get('/available-book', requireAuth, getAvailableBookController);
router.get('/reserved-book', requireAuth, getReservedBookController);

// Get book reservation
router.get('/', requireAuth, getBookReservationsController);
router.get('/:id', requireAuth, getReservedBookController);

// Create book reservation
router.post('/', requireAuth, createBookReservationController)

// Update book reservation
router.put('/:id', requireAuth, updateBookReservationByIdController);

// Delete book reservation
router.delete('/:id', requireAuth, deleteBookReservationByIdController);


// Search book reservation
router.post('/search', requireAuth, searchBookReservationController);

module.exports = router;
