const bookReservationBL = require('../businessLayer/bookReservationBL');
const errorLog = require('../lib/errorLog');
const getAuthUser = require('../lib/getAuthUser');


//---------------------- Get methods ----------------------\\
const getBookReservationsController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookReservations = await bookReservationBL.getBookReservations(authUser, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully",
            bookReservations,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        return res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getBookReservationByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);
        const bookReservationId = req.params.id;

        const bookReservation = await bookReservationBL.getBookReservationById(authUser, bookReservationId);

        res.status(200).send({
            success: true,
            message: "Book reservation retrieved successfully",
            bookReservation,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Create methods ----------------------\\
const createBookReservationController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);
        const newBookReservation = req.body;

        const createdBookReservation = await bookReservationBL.createBookReservation(authUser, newBookReservation);

        res.status(201).send({
            success: true,
            message: "New book reservation created successfully",
            createdBookReservation,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Update methods ----------------------\\
const updateBookReservationByIdController = async (req, res) => {

    try {
        const authUser = await getAuthUser(req.cookies.jwt);
        const bookReservationId = req.params.id;
        const updatableBookReservation = req.body;

        const updatedBookReservation = await bookReservationBL.updateBookReservationById(authUser, bookReservationId, updatableBookReservation);

        res.status(200).send({
            success: true,
            message: "Book reservation updated successfully",
            updatedBookReservation,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Delete methods ----------------------\\
const deleteBookReservationByIdController = async (req, res) => {

    try {
        const authUser = await getAuthUser(req.cookies.jwt);
        const bookReservationId = req.params.id;

        const deletedBookReservation = await bookReservationBL.deleteBookReservationById(authUser, bookReservationId);

        res.status(200).send({
            success: true,
            message: "Book reservation deleted successfully",
            bookReservation: deletedBookReservation,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Search methods ----------------------\\
const searchBookReservationController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);
        const searchTermsForBookReservation = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookReservations = await bookReservationBL.searchBookReservation(authUser, searchTermsForBookReservation, pagingQuery);

        res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            bookReservations,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Extra methods ----------------------\\
const getAvailableBookController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);

        

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const availableBooks = await bookReservationBL.getAvailableBook(authUser, pagingQuery);
        res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            availableBooks,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getReservedBookController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req.cookies.jwt);

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const availableBooks = await bookReservationBL.getReservedBook(authUser, pagingQuery);
        res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            availableBooks,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};
module.exports = {
    getBookReservationsController,
    getBookReservationByIdController,
    createBookReservationController,
    updateBookReservationByIdController,
    deleteBookReservationByIdController,
    searchBookReservationController,
    getAvailableBookController,
    getReservedBookController,
};
