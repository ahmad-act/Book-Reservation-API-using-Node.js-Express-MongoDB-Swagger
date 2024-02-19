const bookInfoModel = require('../models/bookInfoModel');

//---------------------- Get methods ----------------------\\
exports.getBookInfos = async (searchBookInfo, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookTitle',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalBookInfo = await bookInfoModel.countDocuments();

    const bookInfos = await bookInfoModel.find(searchBookInfo)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { bookInfos, totalBookInfo };
};

// ---------------------- Create methods ----------------------\\
exports.createBookInfo = async (bookInfo) => {
    const newBookInfo = new bookInfoModel(bookInfo);

    //const options = { wtimeout: 20000 };
    return await newBookInfo.save();
};

exports.createBulkBookInfo = async (users) => {
    return await bookInfoModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateBookInfoById = async (userId, user) => {
    return await bookInfoModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkBookInfos = async (bulkUpdateOperations) => {
    return await bookInfoModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookInfoById = async (bookInfoId) => {
    return await bookInfoModel.findByIdAndDelete(bookInfoId);
};

exports.deleteBulkBookInfo = async (bulkDeleteOperations) => {
    return await bookInfoModel.bulkWrite(bulkDeleteOperations);
};