const userRoleBL = require('../businessLayer/userRoleBL');
const errorLog = require('../lib/errorLog');


//---------------------- Get methods ----------------------\\
const getUserRolesController = async (req, res) => {
    try {
        const userRoles = await userRoleBL.getUserRoles(req.cookies.jwt);
        return res.status(200).send({
            success: true,
            userRoles,
            message: "UserRoles retrieved successfully",
        });
    } catch (err) {
        const error = errorLog("Error while retrieving userRoles", err);
        return res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getUserRoleByIdController = async (req, res) => {
    try {
        const userRoleId = req.params.id;

        const userRole = await userRoleBL.getUserRoleById(req.cookies.jwt, userRoleId);

        res.status(200).send({
            success: true,
            userRole,
            message: "UserRole retrieved successfully",
        });
    } catch (err) {
        const error = errorLog("Error while retrieving the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const getUserRolesByIdsController = async (req, res) => {
    try {
        const ids = req.body;

        const { userRoles, presentIds, absentIds, invalidIds } = await userRoleBL.getUserRolesByIds(req.cookies.jwt, ids);

        return res.status(200).send({
            success: true,
            userRoles,
            presentIds,
            absentIds,
            invalidIds,
            message: "UserRoles retrieved successfully",
        });
    } catch (err) {
        const error = errorLog("Error while retrieving userRoles", err);
        return res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Create methods ----------------------\\
const createUserRoleController = async (req, res) => {
    try {
        const newUserRole = req.body;

        const createdUserRole = await userRoleBL.createUserRole(req.cookies.jwt, newUserRole);

        res.status(201).send({
            success: true,
            message: "New userRole created successfully",
            createdUserRole,
        });
    } catch (err) {
        const error = errorLog("Error while creating the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const createBulkUserRoleController = async (req, res) => {
    try {
        const userRole = req.body;

        const userRoles = await userRoleBL.createBulkUserRole(req.cookies.jwt, userRole);

        res.status(201).send({
            success: true,
            message: "New userRole created successfully",
            userRoles,
        });
    } catch (err) {
        const error = errorLog("Error while creating the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }

};


// ---------------------- Update methods ----------------------\\
const updateUserRoleByIdController = async (req, res) => {
    try {
        const userRoleId = req.params.id;
        const updateUserRole = req.body;

        const updatedUserRole = await userRoleBL.updateUserRoleById(req.cookies.jwt, userRoleId, updateUserRole);

        res.status(200).send({
            success: true,
            message: "UserRole updated successfully",
            updatedUserRole,
        });
    } catch (err) {
        const error = errorLog("Error while updating the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const updateBalkUserRoleController = async (req, res) => {
    try {
        const updateUserRoles = req.body;

        const updatedUserRole = await userRoleBL.updateBulkUserRoles(req.cookies.jwt, updateUserRoles);

        res.status(200).send({
            success: true,
            message: "UserRole updated successfully",
            updatedUserRole,
        });
    } catch (err) {
        const error = errorLog("Error while updating the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }



};


// ---------------------- Delete methods ----------------------\\
const deleteUserRoleByIdController = async (req, res) => {
    try {
        const userRoleId = req.params.id;

        const deletedUserRole = await userRoleBL.deleteUserRoleById(req.cookies.jwt, userRoleId);

        res.status(200).send({
            success: true,
            message: "UserRole deleted successfully",
            userRole: deletedUserRole,
        });
    } catch (err) {
        const error = errorLog("Error while deleting the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

const deleteBulkUserRoleController = async (req, res) => {
    try {
        const userRoleIds = req.body;

        const deletedUserRole = await userRoleBL.deleteBulkUserRoles(req.cookies.jwt, userRoleIds);

        res.status(200).send({
            success: true,
            message: "UserRole deleted successfully",
            userRole: deletedUserRole,
        });
    } catch (err) {
        const error = errorLog("Error while deleting the userRole", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};


// ---------------------- Search methods ----------------------\\
const searchUserRoleController = async (req, res) => {
    try {
        const searchUserRole = req.body;

        const userRoles = await userRoleBL.searchUserRole(req.cookies.jwt, searchUserRole);

        res.status(200).send({
            success: true,
            userRoles,
            message: "UserRoles retrieved based on search criteria",
        });
    } catch (err) {
        const error = errorLog("Error while searching for userRoles", err);
        res.status(err.status ?? 500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
};

module.exports = {
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
};
