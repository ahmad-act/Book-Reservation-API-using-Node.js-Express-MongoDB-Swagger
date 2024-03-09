const detailTableBL = require('../businessLayer/detailTableBL');
const errorLog = require('../lib/errorLog');
const getAuthUser = require('../lib/getAuthUser');


//---------------------- Get methods ----------------------\\
const getDetailTablesController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const detailTables = await detailTableBL.getDetailTables(authUser, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Detail tables retrieved successfully",
            detailTables,
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

const getDetailTableByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const detailTableId = req.params.id;

        const detailTable = await detailTableBL.getDetailTableById(authUser, detailTableId);

        res.status(200).send({
            success: true,
            message: "Detail table retrieved successfully",
            detailTable,
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

const getDetailTablesByIdsController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const detailTableIds = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const { detailTables, presentIds, absentIds, invalidIds } = await detailTableBL.getDetailTablesByIds(authUser, detailTableIds, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "DetailTables retrieved successfully",
            detailTables,
            presentIds,
            absentIds,
            invalidIds,
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


// ---------------------- Create methods ----------------------\\
const createDetailTableController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newDetailTable = req.body;

        const createdDetailTable = await detailTableBL.createDetailTable(authUser, newDetailTable);

        res.status(201).send({
            success: true,
            message: "New detail table created successfully",
            createdDetailTable,
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

const createBulkDetailTableController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newDetailTables = req.body;

        const detailTables = await detailTableBL.createBulkDetailTable(authUser, newDetailTables);

        res.status(201).send({
            success: true,
            message: "New detail table created successfully",
            detailTables,
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
const updateDetailTableByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const detailTableId = req.params.id;
        const updatableDetailTable = req.body;

        const updatedDetailTable = await detailTableBL.updateDetailTableById(authUser, detailTableId, updatableDetailTable);

        res.status(200).send({
            success: true,
            message: "Detail table updated successfully",
            updatedDetailTable,
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

const updateBalkDetailTableController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const updatableDetailTables = req.body;

        const { detailTable, presentIds, absentIds, invalidIds } = await detailTableBL.updateBulkDetailTables(authUser, updatableDetailTables);

        res.status(200).send({
            success: true,
            message: "Detail table updated successfully",
            updatedIds: presentIds,
            absentIds,
            invalidIds,
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
const deleteDetailTableByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const detailTableId = req.params.id;

        const deletedDetailTable = await detailTableBL.deleteDetailTableById(authUser, detailTableId);

        res.status(200).send({
            success: true,
            message: "Detail table deleted successfully",
            detailTable: deletedDetailTable,
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

const deleteBulkDetailTableController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const detailTableIds = req.body;

        const { detailTable, presentIds, absentIds, invalidIds } = await detailTableBL.deleteBulkDetailTables(authUser, detailTableIds);

        res.status(200).send({
            success: true,
            message: "Detail table deleted successfully",
            deletedIds: presentIds,
            absentIds,
            invalidIds,
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
const searchDetailTableController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const searchTermsForDetailTable = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const detailTables = await detailTableBL.searchDetailTable(authUser, searchTermsForDetailTable, pagingQuery);

        res.status(200).send({
            success: true,
            message: "Detail tables retrieved successfully based on the search criteria",
            detailTables,
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
};
