const bookCategoryBL = require('../businessLayer/bookCategoryBL');
const errorLog = require('../lib/errorLog');
const getAuthUser = require('../lib/getAuthUser');


//---------------------- Get methods ----------------------\\
const getBookCategoriesController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookCategories = await bookCategoryBL.getBookCategories(authUser, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Book categories retrieved successfully",
            bookCategories,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        return res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getBookCategoryByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookCategoryId = req.params.id;

        const bookCategory = await bookCategoryBL.getBookCategoryById(authUser, bookCategoryId);

        res.status(200).send({
            success: true,
            message: "Book category retrieved successfully",
            bookCategory,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getBookCategoriesByIdsController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookCategoryIds = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const { bookCategories, presentIds, absentIds, invalidIds } = await bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "BookCategories retrieved successfully",
            bookCategories,
            presentIds,
            absentIds,
            invalidIds,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        return res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Create methods ----------------------\\
const createBookCategoryController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newBookCategory = req.body;

        const createdBookCategory = await bookCategoryBL.createBookCategory(authUser, newBookCategory);

        res.status(201).send({
            success: true,
            message: "New book category created successfully",
            createdBookCategory,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const createBulkBookCategoryController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newBookCategories = req.body;

        const bookCategories = await bookCategoryBL.createBulkBookCategory(authUser, newBookCategories);

        res.status(201).send({
            success: true,
            message: "New book category created successfully",
            bookCategories,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Update methods ----------------------\\
const updateBookCategoryByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookCategoryId = req.params.id;
        const updatableBookCategory = req.body;

        const updatedBookCategory = await bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, updatableBookCategory);

        res.status(200).send({
            success: true,
            message: "Book category updated successfully",
            bookCategory: updatedBookCategory,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const updateBalkBookCategoryController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const updatableBookCategories = req.body;

        const { bookCategory, presentIds, absentIds, invalidIds } = await bookCategoryBL.updateBulkBookCategories(authUser, updatableBookCategories);

        res.status(200).send({
            success: true,
            message: "Book category updated successfully",
            updatedIds: presentIds,
            absentIds,
            invalidIds,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Delete methods ----------------------\\
const deleteBookCategoryByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookCategoryId = req.params.id;

        const deletedBookCategory = await bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId);

        res.status(200).send({
            success: true,
            message: "Book category deleted successfully",
            bookCategory: deletedBookCategory,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const deleteBulkBookCategoryController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookCategoryIds = req.body;

        const { bookCategory, presentIds, absentIds, invalidIds } = await bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds);

        res.status(200).send({
            success: true,
            message: "Book category deleted successfully",
            deletedIds: presentIds,
            absentIds,
            invalidIds,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Search methods ----------------------\\
const searchBookCategoryController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const searchTermsForBookCategory = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookCategories = await bookCategoryBL.searchBookCategory(authUser, searchTermsForBookCategory, pagingQuery);

        res.status(200).send({
            success: true,
            message: "Book categories retrieved successfully based on the search criteria",
            bookCategories,
        });
    } catch (err) {
        const error = errorLog(err.message, err);
        res.status(error.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

module.exports = {
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
};
