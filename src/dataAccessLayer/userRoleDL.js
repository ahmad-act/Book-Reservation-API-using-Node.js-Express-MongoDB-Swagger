const userRoleModel = require('../models/userRoleModel');

exports.getUserRoles = async (searchUserRole) => {
    return await userRoleModel.find(searchUserRole);
};

exports.getUserRoleById = async (userId) => {

    return await userRoleModel.findById(userId);
};



exports.createUserRole = async (user) => {
    const newUserRole = new userRoleModel(user);

    return await newUserRole.save();
};

exports.createBulkUserRole = async (users) => {
    return await userRoleModel.insertMany(users, { ordered: false });
};


exports.updateUserRoleById = async (userId, user) => {
    return await userRoleModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkUserRoles = async (bulkUpdateOperations) => {
    return await userRoleModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};



exports.deleteUserRole = async (userRoleId) => {
    return await userRoleModel.findByIdAndDelete(userRoleId);
};

exports.deleteBulkUserRole = async (bulkDeleteOperations) => {
    return await userRoleModel.bulkWrite(bulkDeleteOperations);
};


exports.searchUserRole = async (searchUserRole) => {
    return await userRoleModel.find(searchUserRole);
};
