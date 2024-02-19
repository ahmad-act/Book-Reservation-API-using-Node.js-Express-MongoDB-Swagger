const bookCategoryModel = require('../models/bookCategoryModel');

//---------------------- Get methods ----------------------\\
exports.getBookCategories = async (searchBookCategory, pagingQuery) => {
    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookCategory',
        sortOrder: 1
    }

    applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder  || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;

    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    const sortedQuery = {};
    sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const totalBookCategory = await bookCategoryModel.countDocuments();

    const bookCategories = await bookCategoryModel.find(searchBookCategory)
        .sort(sortedQuery)
        .skip(startIndex)
        .limit(applyPagingQuery.pageSize);

    return { bookCategories, totalBookCategory };
};

// ---------------------- Create methods ----------------------\\
exports.createBookCategory = async (bookCategory) => {
    const newBookCategory = new bookCategoryModel(bookCategory);

    //const options = { wtimeout: 20000 };
    return await newBookCategory.save();
};

exports.createBulkBookCategory = async (users) => {
    return await bookCategoryModel.insertMany(users, { ordered: false });
};

// ---------------------- Update methods ----------------------\\
exports.updateBookCategoryById = async (userId, user) => {
    return await bookCategoryModel.findByIdAndUpdate(
        userId,
        user,
        { new: true }
    );
};

exports.updateBulkBookCategories = async (bulkUpdateOperations) => {
    return await bookCategoryModel.bulkWrite(bulkUpdateOperations, { ordered: false });
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookCategoryById = async (bookCategoryId) => {
    return await bookCategoryModel.findByIdAndDelete(bookCategoryId);
};

exports.deleteBulkBookCategory = async (bulkDeleteOperations) => {
    return await bookCategoryModel.bulkWrite(bulkDeleteOperations);
};