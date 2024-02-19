const userModel = require('../models/userModel');

exports.getUsers = async (searchUser, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'userName',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalUser = await userModel.countDocuments();

    const users = await userModel.find(searchUser)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { users, totalUser };
};

exports.getUserById = async (userId) => {

    return await userModel.findById(userId);
};



exports.createUser = async (user) => {
    const newUser = new userModel(user);

    return await newUser.save();
};

exports.createBulkUser = async (users) => {
    return await userModel.insertMany(users, { ordered: false });
};


exports.updateUserById = async (userId, user) => {

    return await userModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkUsers = async (bulkUpdateOperations) => {
    return await userModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};



exports.deleteUserById = async (userId) => {
    return await userModel.findByIdAndDelete(userId);
};

exports.deleteBulkUser = async (bulkDeleteOperations) => {
    return await userModel.bulkWrite(bulkDeleteOperations);
};


exports.searchUser = async (searchUser) => {
    return await userModel.find(searchUser);
};
