const bookInfoBL = require('../businessLayer/bookInfoBL');
const errorLog = require('../lib/errorLog');
const getAuthUser = require('../lib/getAuthUser');


//---------------------- Get methods ----------------------\\
const getBookInfosController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookInfos = await bookInfoBL.getBookInfos(authUser, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Book infos retrieved successfully",
            bookInfos,
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

const getBookInfoByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookInfoId = req.params.id;

        const bookInfo = await bookInfoBL.getBookInfoById(authUser, bookInfoId);

        res.status(200).send({
            success: true,
            message: "Book info retrieved successfully",
            bookInfo,
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

const getBookInfosByIdsController = async (req, res) => {

    try {
        const authUser = await getAuthUser(req);
        const bookInfoIds = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const { bookInfos, presentIds, absentIds, invalidIds } = await bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "BookInfos retrieved successfully",
            bookInfos,
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
const createBookInfoController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        let newBookInfo = req.body;
        newBookInfo.coverImage = '';
        
        if (req.file) {
            // Extract file details
            const { filename, path: filePath, originalname } = req.file;

            // set the storage cover image name in uploads folder
            newBookInfo.coverImage = filename;
        }

        const createdBookInfo = await bookInfoBL.createBookInfo(authUser, newBookInfo);

        res.status(201).send({
            success: true,
            message: "New book info created successfully",
            createdBookInfo,
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

const createBulkBookInfoController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newBookInfos = req.body;

        const bookInfos = await bookInfoBL.createBulkBookInfo(authUser, newBookInfos);

        res.status(201).send({
            success: true,
            message: "New book info created successfully",
            bookInfos,
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
const updateBookInfoByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookInfoId = req.params.id;
        const updatableBookInfo = req.body;

        const updatedBookInfo = await bookInfoBL.updateBookInfoById(authUser, bookInfoId, updatableBookInfo);

        res.status(200).send({
            success: true,
            message: "Book info updated successfully",
            bookInfo: updatedBookInfo,
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

const updateBalkBookInfoController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const updatableBookInfos = req.body;

        const { bookInfo, presentIds, absentIds, invalidIds } = await bookInfoBL.updateBulkBookInfos(authUser, updatableBookInfos);

        res.status(200).send({
            success: true,
            message: "Book info updated successfully",
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
const deleteBookInfoByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookInfoId = req.params.id;

        const deletedBookInfo = await bookInfoBL.deleteBookInfoById(authUser, bookInfoId);

        res.status(200).send({
            success: true,
            message: "Book info deleted successfully",
            bookInfo: deletedBookInfo,
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

const deleteBulkBookInfoController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const bookInfoIds = req.body;

        const { bookInfo, presentIds, absentIds, invalidIds } = await bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds);

        res.status(200).send({
            success: true,
            message: "Book info deleted successfully",
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
const searchBookInfoController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const searchTermsForBookInfo = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const bookInfos = await bookInfoBL.searchBookInfo(authUser, searchTermsForBookInfo, pagingQuery);

        res.status(200).send({
            success: true,
            message: "Book infos retrieved successfully based on the search criteria",
            bookInfos,
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
};
