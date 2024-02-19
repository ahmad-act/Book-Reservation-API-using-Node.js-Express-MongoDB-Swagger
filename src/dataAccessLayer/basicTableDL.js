const basicTableModel = require('../models/basicTableModel');

//---------------------- Get methods ----------------------\\
exports.getBasicTables = async (searchBasicTable, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'basicTableName',
        sortOrder: 1
    }

    applyPagingQuery = pagingQuery ? pagingQuery : defaultPagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalBasicTable = await basicTableModel.countDocuments();

    const basicTables = await basicTableModel.find(searchBasicTable)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { basicTables, totalBasicTable };
};

// ---------------------- Create methods ----------------------\\
exports.createBasicTable = async (basicTable) => {
    const newBasicTable = new basicTableModel(basicTable);

    //const options = { wtimeout: 20000 };
    return await newBasicTable.save();
};

exports.createBulkBasicTable = async (users) => {
    return await basicTableModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateBasicTableById = async (userId, user) => {
    return await basicTableModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkBasicTables = async (bulkUpdateOperations) => {
    return await basicTableModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBasicTable = async (basicTableId) => {
    return await basicTableModel.findByIdAndDelete(basicTableId);
};

exports.deleteBulkBasicTable = async (bulkDeleteOperations) => {
    return await basicTableModel.bulkWrite(bulkDeleteOperations);
};


// // ---------------------- Search methods ----------------------\\
// exports.searchBasicTable = async (searchBasicTable, pagingQuery) => {
//     const startIndex = (pagingQuery.page - 1) * pagingQuery.pageSize;
//     const sortedQuery = {};
//     sortedQuery[pagingQuery.sortBy] = pagingQuery.sortOrder;

//     return await basicTableModel.find(searchBasicTable)
//         .sort(sortedQuery)
//         .skip(startIndex)
//         .limit(pageSize);;
// };
