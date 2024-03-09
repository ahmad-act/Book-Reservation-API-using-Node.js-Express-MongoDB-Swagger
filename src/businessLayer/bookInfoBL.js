const bookInfoModel = require("../models/bookInfoModel");
const bookInfoDL = require("../dataAccessLayer/bookInfoDL");
const userAccessibilityOperation = require("../lib/userAccessibilityOperation");
const idAndPropertyValidationUtil = require("../lib/idAndPropertyValidationUtil");


//---------------------- Get methods ----------------------\\
exports.getBookInfos = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookInfos()");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);



    const defaultPagingQuery = {
        page: 1,
        pageSize: 100,
        sortBy: 'bookInfo.bookTitle',
        sortOrder: 1
    };

    const applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
    const startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
    //const sortedQuery = {};
    //sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;

    const bookInfos = await bookInfoModel.aggregate([
        {
            $lookup: {
                from: "bookcategories",
                localField: "bookCategoryId",
                foreignField: "_id",
                as: "bookCategory",
            },
        },
        {
            $unwind: {
                path: "$bookCategory",
                preserveNullAndEmptyArrays: true, // Preserve documents that don't have a matching category
            },
        },
        {
            $project: {
                bookTitle: 1,
                stock: 1,
                bookCategoryId: 1,
                author: 1,
                ISBN: 1,
                publisher: 1,
                publishDate: 1,
                language: 1,
                coverImage: 1,
                note: 1,
                "bookCategory.bookCategoryName": 1, // Include the category data in the projection
            },
        },
        // {
        //     $match: roleFilter,
        // },
        {
            $sort: {
                [defaultPagingQuery.sortBy]: applyPagingQuery.sortOrder === 'desc' ? -1 : 1, // 1 for ascending order, -1 for descending order
            },
        },
        {
            $skip: startIndex,
        },
        {
            $limit: applyPagingQuery.pageSize,
        },
    ])




    // // Get data
    // const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter }, pagingQuery);

    // // Check if book infos are null or undefined
    // if (!existingBookInfos || existingBookInfos.length === 0) {
    //     const error = new Error();
    //     error.status = 404;
    //     error.message = "Book info not found";
    //     error.error = "Book info not found or you do not have access to the data";
    //     throw error;
    // }

    const totalBookInfo = await bookInfoModel.countDocuments();
    return { bookInfos, totalBookInfo };
};

exports.getBookInfoById = async (authUser, bookInfoId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookInfoById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: bookInfoId });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info ID";
        error.error = `Book info not found by the provided ID (${bookInfoId}) or you do not have access to the data`;
        throw error;
    }

    return existingBookInfos;
};

exports.getBookInfosByIds = async (authUser, bookInfoIds, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 1 for all

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookInfos()");

    // Valid and invalid IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs");

    // Check for duplicate IDs
    if (duplicateIds && duplicateIds.length > 0) {
        const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
        const duplicateIdsString = JSON.stringify(duplicateIds);
        const error = new Error();
        error.status = 400;
        error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        throw error;
    }

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid book info ids";
        error.error = `All book info ids (${displayInvalidIds}) are invalid, no book info found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get existing data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: { $in: validIds } }, pagingQuery);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookInfos.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info IDs";
        error.error = `Book info not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Get data
    return { bookInfos: existingBookInfos, presentIds, absentIds, invalidIds };
};


// ---------------------- Create methods ----------------------\\
exports.createBookInfo = async (authUser, newBookInfo) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookInfo()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(newBookInfo, bookInfoModel.schema.paths, "book info", []);
    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookInfo, "book info");

    return await bookInfoDL.createBookInfo(newBookInfo);
};

exports.createBulkBookInfo = async (authUser, newBookInfos) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkBookInfo()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookInfos, bookInfoModel.schema.paths, "book info", []);
    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newBookInfos, "book info");

    // create new book infos in bulk
    return await bookInfoDL.createBulkBookInfo(newBookInfos);
};


// ---------------------- Update methods ----------------------\\
exports.updateBookInfoById = async (authUser, bookInfoId, updatableBookInfo) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookInfoById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");
    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(updatableBookInfo, bookInfoModel.schema.paths, "book info", []);

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: bookInfoId });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info ID";
        error.error = `Book info not found by the provided ID (${bookInfoId}) or you do not have access to the data`;
        throw error;
    }

    // Update data
    return await bookInfoDL.updateBookInfoById(bookInfoId, updatableBookInfo);
};

exports.updateBulkBookInfos = async (authUser, updatableBookInfos) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkBookInfos()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableBookInfos, bookInfoModel.schema.paths, "book info", []);

    // IDs validation and separation
    const bookInfoIds = updatableBookInfos.map(user => user._id);
    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs");

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid book info ids";
        error.error = `All book info ids (${displayInvalidIds}) are invalid, no book info found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookInfos.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info IDs";
        error.error = `Book info not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Valid data
    const validUpdatableBookInfos = updatableBookInfos.filter(user => presentIds.includes(user._id));
    // Bulk operation generator
    const bulkUpdateOperations = await bookInfoModel.generateBulkUpdateOperations(validUpdatableBookInfos);
    // Update data
    const updatedBookInfos = await bookInfoDL.updateBulkBookInfos(bulkUpdateOperations);

    return { bookInfo: updatedBookInfos, presentIds, absentIds, invalidIds };
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookInfoById = async (authUser, bookInfoId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookInfoById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: bookInfoId });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info ID";
        error.error = `Book info not found by the provided ID (${bookInfoId}) or you do not have access to the data`;
        throw error;
    }

    // Delete data
    return await bookInfoDL.deleteBookInfoById(existingBookInfos[0]._id);
};

exports.deleteBulkBookInfos = async (authUser, bookInfoIds) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookInfos()");

    // Valid and invalid IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs");

    // Check for duplicate IDs
    if (duplicateIds && duplicateIds.length > 0) {
        const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
        const duplicateIdsString = JSON.stringify(duplicateIds);
        const error = new Error();
        error.status = 400;
        error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
        throw error;
    }

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid book info IDs";
        error.error = `All book info ids (${displayInvalidIds}) are invalid, no book info found by the provided IDs`;
        throw error;
    }

    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos({ bookInfoAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookInfos.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookInfos || existingBookInfos.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found with the provided book info IDs";
        error.error = `Book info not found with the provided book info IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Bulk operation generator
    const bulkDeleteOperations = await bookInfoModel.generateBulkDeleteOperations(existingBookInfos);

    // Delete data
    const deletedBookInfos = await bookInfoDL.deleteBulkBookInfo(bulkDeleteOperations);

    return { bookInfo: deletedBookInfos, presentIds, absentIds, invalidIds };
};


// ---------------------- Search methods ----------------------\\
exports.searchBookInfo = async (authUser, searchTermsForBookInfo, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 10 for all

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookInfo()");
    // ID and property validation
    idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookInfo, bookInfoModel.schema.paths, "book info", []);

    // Filter generator
    const searchBookInfoFilter = await bookInfoModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookInfo);

    // Get existing data
    const { bookInfos: existingBookInfos, totalBookInfo } = await bookInfoDL.getBookInfos(searchBookInfoFilter, pagingQuery);

    // Check if book infos are null or undefined
    if (!existingBookInfos || existingBookInfos.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book info not found";
        error.error = "Book info not found with the provided search criteria or you do not have access to the data";
        throw error;
    }

    return existingBookInfos;
};


