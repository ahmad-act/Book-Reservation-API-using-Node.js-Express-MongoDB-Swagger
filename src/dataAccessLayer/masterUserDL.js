const masterUserModel = require('../models/masterUserModel');

//---------------------- Get methods ----------------------\\
exports.getMasterUsers = async (searchMasterUser, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'masterUserName',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalMasterUser = await masterUserModel.countDocuments();

    const masterUsers = await masterUserModel.find(searchMasterUser)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { masterUsers, totalMasterUser };
};

// ---------------------- Create methods ----------------------\\
exports.createMasterUser = async (masterUser) => {
    const newMasterUser = new masterUserModel(masterUser);

    //const options = { wtimeout: 20000 };
    return await newMasterUser.save();
};

exports.createBulkMasterUser = async (users) => {
    return await masterUserModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateMasterUserById = async (userId, user) => {
    return await masterUserModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkMasterUsers = async (bulkUpdateOperations) => {
    return await masterUserModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteMasterUserById = async (masterUserId) => {
    return await masterUserModel.findByIdAndDelete(masterUserId);
};

exports.deleteBulkMasterUser = async (bulkDeleteOperations) => {
    return await masterUserModel.bulkWrite(bulkDeleteOperations);
};


// // ---------------------- Search methods ----------------------\\
// exports.searchMasterUser = async (searchMasterUser, pagingQuery) => {
//     const startIndex = (pagingQuery.page - 1) * pagingQuery.pageSize;
//     const sortedQuery = {};
//     sortedQuery[pagingQuery.sortBy] = pagingQuery.sortOrder;

//     return await masterUserModel.find(searchMasterUser)
//         .sort(sortedQuery)
//         .skip(startIndex)
//         .limit(pageSize);;
// };
