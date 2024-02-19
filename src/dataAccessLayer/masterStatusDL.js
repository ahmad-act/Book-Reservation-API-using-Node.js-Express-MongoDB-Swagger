const masterStatusModel = require('../models/masterStatusModel');

//---------------------- Get methods ----------------------\\
exports.getMasterStatuss = async (searchMasterStatus, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'masterStatusName',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalMasterStatus = await masterStatusModel.countDocuments();

    const masterStatuss = await masterStatusModel.find(searchMasterStatus)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { masterStatuss, totalMasterStatus };
};

// ---------------------- Create methods ----------------------\\
exports.createMasterStatus = async (masterStatus) => {
    const newMasterStatus = new masterStatusModel(masterStatus);

    //const options = { wtimeout: 20000 };
    return await newMasterStatus.save();
};

exports.createBulkMasterStatus = async (users) => {
    return await masterStatusModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateMasterStatusById = async (userId, user) => {
    return await masterStatusModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkMasterStatuss = async (bulkUpdateOperations) => {
    return await masterStatusModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteMasterStatusById = async (masterStatusId) => {
    return await masterStatusModel.findByIdAndDelete(masterStatusId);
};

exports.deleteBulkMasterStatus = async (bulkDeleteOperations) => {
    return await masterStatusModel.bulkWrite(bulkDeleteOperations);
};


// // ---------------------- Search methods ----------------------\\
// exports.searchMasterStatus = async (searchMasterStatus, pagingQuery) => {
//     const startIndex = (pagingQuery.page - 1) * pagingQuery.pageSize;
//     const sortedQuery = {};
//     sortedQuery[pagingQuery.sortBy] = pagingQuery.sortOrder;

//     return await masterStatusModel.find(searchMasterStatus)
//         .sort(sortedQuery)
//         .skip(startIndex)
//         .limit(pageSize);;
// };
