const detailTableModel = require('../models/detailTableModel');

//---------------------- Get methods ----------------------\\
exports.getDetailTables = async (searchDetailTable, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'detailTableName',
        sortOrder: 1
    }

    applyPagingQuery = pagingQuery ? pagingQuery : defaultPagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalDetailTable = await detailTableModel.countDocuments();

    const detailTables = await detailTableModel.find(searchDetailTable)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { detailTables, totalDetailTable };
};

// ---------------------- Create methods ----------------------\\
exports.createDetailTable = async (detailTable) => {
    const newDetailTable = new detailTableModel(detailTable);

    //const options = { wtimeout: 20000 };
    return await newDetailTable.save();
};

exports.createBulkDetailTable = async (users) => {
    return await detailTableModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateDetailTableById = async (userId, user) => {
    return await detailTableModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkDetailTables = async (bulkUpdateOperations) => {
    return await detailTableModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteDetailTable = async (detailTableId) => {
    return await detailTableModel.findByIdAndDelete(detailTableId);
};

exports.deleteBulkDetailTable = async (bulkDeleteOperations) => {
    return await detailTableModel.bulkWrite(bulkDeleteOperations);
};


// // ---------------------- Search methods ----------------------\\
// exports.searchDetailTable = async (searchDetailTable, pagingQuery) => {
//     const startIndex = (pagingQuery.page - 1) * pagingQuery.pageSize;
//     const sortedQuery = {};
//     sortedQuery[pagingQuery.sortBy] = pagingQuery.sortOrder;

//     return await detailTableModel.find(searchDetailTable)
//         .sort(sortedQuery)
//         .skip(startIndex)
//         .limit(pageSize);;
// };
