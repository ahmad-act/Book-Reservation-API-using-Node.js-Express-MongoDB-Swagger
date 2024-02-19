const detailItemModel = require('../models/detailItemModel');

//---------------------- Get methods ----------------------\\
exports.getDetailItems = async (searchDetailItem, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'detailItemName',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalDetailItem = await detailItemModel.countDocuments();

    const detailItems = await detailItemModel.find(searchDetailItem)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { detailItems, totalDetailItem };
};

// ---------------------- Create methods ----------------------\\
exports.createDetailItem = async (detailItem) => {
    const newDetailItem = new detailItemModel(detailItem);

    //const options = { wtimeout: 20000 };
    return await newDetailItem.save();
};

exports.createBulkDetailItem = async (users) => {
    return await detailItemModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateDetailItemById = async (userId, user) => {
    return await detailItemModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkDetailItems = async (bulkUpdateOperations) => {
    return await detailItemModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteDetailItemById = async (detailItemId) => {
    return await detailItemModel.findByIdAndDelete(detailItemId);
};

exports.deleteBulkDetailItem = async (bulkDeleteOperations) => {
    return await detailItemModel.bulkWrite(bulkDeleteOperations);
};


// // ---------------------- Search methods ----------------------\\
// exports.searchDetailItem = async (searchDetailItem, pagingQuery) => {
//     const startIndex = (pagingQuery.page - 1) * pagingQuery.pageSize;
//     const sortedQuery = {};
//     sortedQuery[pagingQuery.sortBy] = pagingQuery.sortOrder;

//     return await detailItemModel.find(searchDetailItem)
//         .sort(sortedQuery)
//         .skip(startIndex)
//         .limit(pageSize);;
// };
