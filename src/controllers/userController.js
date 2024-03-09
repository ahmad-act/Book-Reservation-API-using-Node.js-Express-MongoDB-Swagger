const userBL = require('../businessLayer/userBL');
const userModel = require('../models/userModel');
const setJwtTokenInCookie = require('../lib/setJwtTokenInCookie');
const getAuthUser = require('../lib/getAuthUser');
const errorLog = require('../lib/errorLog');
const errorLogLogin = require('../lib/errorLogLogin');


//---------------------- Get methods ----------------------\\
const getUsersController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const users = await userBL.getUsers(authUser, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
            users,
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
const getUserByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const UserId = req.params.id;

        const User = await userBL.getUserById(authUser, UserId);

        res.status(200).send({
            success: true,
            message: "User retrieved successfully",
            User,
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

const getUsersByIdsController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const userIds = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const { users, presentIds, absentIds, invalidIds } = await userBL.getUsersByIds(authUser, userIds, pagingQuery);

        return res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
            users,
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
const createUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        let newUser = req.body;

        // Extract file details
        const { filename, path: filePath, originalname } = req.file;

        newUser.photo = filename;

        const createdUser = await userBL.createUser(authUser, newUser);

        res.status(201).send({
            success: true,
            message: "New user created successfully",
            user: createdUser,
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

const createBulkUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const newUsers = req.body;

        const users = await userBL.createBulkUser(authUser, newUsers);

        res.status(201).send({
            success: true,
            message: "New user created successfully",
            users,
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
const updateUserByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const userId = req.params.id;
        const updatableUser = req.body;

        const updatedUser = await userBL.updateUserById(authUser, userId, updatableUser);

        res.status(200).send({
            success: true,
            message: "User updated successfully",
            user: updatedUser,
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

const updateBalkUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const updatableUsers = req.body;

        const { user, presentIds, absentIds, invalidIds } = await userBL.updateBulkUsers(authUser, updatableUsers);

        res.status(200).send({
            success: true,
            message: "User updated successfully",
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
const deleteUserByIdController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const userId = req.params.id;

        const deletedUser = await userBL.deleteUserById(authUser, userId);

        res.status(200).send({
            success: true,
            message: "User deleted successfully",
            user: deletedUser,
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

const deleteBulkUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const userIds = req.body;

        const { user, presentIds, absentIds, invalidIds } = await userBL.deleteBulkUsers(authUser, userIds);

        res.status(200).send({
            success: true,
            message: "User deleted successfully",
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
const searchUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        const searchTermsForUser = req.body;

        const pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        }

        const users = await userBL.searchUser(authUser, searchTermsForUser, pagingQuery);

        res.status(200).send({
            success: true,
            users,
            message: "Users retrieved successfully based on the search criteria",
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


// ------------------ Sign in/Sign up methods ------------------\\
const registerUserController = async (req, res) => {
    try {

        const user = req.body;
        // validation
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "Please provide a valid user",
            });
        }

        await userBL.registerUser(user);

        res.status(201).send({
            success: true,
            message: "New user created successfully",
        });
    } catch (err) {
        const error1 = errorLogLogin(err);
        res.status(500).send({
            success: false,
            email: error1.email,
            password: error1.password,
        });
    }

};

const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.login(email, password);
        // const token = createToken(user._id);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        const jwtToken = setJwtTokenInCookie(res, user._id);

        res.status(200).json({ user: user._id, token: jwtToken });
    }
    catch (err) {
        const error = errorLogLogin(err);

        res.status(500).send({
            success: false,
            email: error.email,
            password: error.password,
        });
    }

}

const logoutUserController = async (req, res) => {
    try {

        const authUser = await getAuthUser(req);
        res.cookie('jwt', '', { maxAge: 1 }); // expires in 1 second regardless of existence

        if (authUser) {
            //res.redirect('/');

            return res.status(200).send({
                success: true,
                message: "Logout successful",
            });
        }
    }
    catch (err) {
        const error = errorLog("Failed to logout", err);

        res.status(500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
}

const checkUserController = async (req, res) => {
    try {
        const authUser = await getAuthUser(req);
        if (authUser) {
            return res.status(200).send({
                success: true,
                message: "Authenticated",
                user: authUser,
            });
        }
        else {
            return res.status(401).send({
                success: false,
                message: "Unauthorized",
            })
        }

    }
    catch (err) {
        const error = errorLog("Failed to login", err);

        res.status(500).send({
            success: false,
            message: error.message,
            error: error.error,
        });
    }
}


module.exports = {
    getUsersController,
    getUserByIdController,
    getUsersByIdsController,
    createUserController,
    createBulkUserController,
    updateUserController: updateUserByIdController,
    updateBalkUserController,
    deleteUserController: deleteUserByIdController,
    deleteBulkUserController,
    searchUserController,
    registerUserController,
    loginUserController,
    logoutUserController,
    checkUserController,
};
