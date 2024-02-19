const bookCategoryModel = require("../models/bookCategoryModel");
const bookCategoryDL = require("../dataAccessLayer/bookCategoryDL");
const userAccessibilityOperation = require("../lib/userAccessibilityOperation");
const idAndPropertyValidationUtil = require("../lib/idAndPropertyValidationUtil");


//---------------------- Get methods ----------------------\\
exports.getBookCategories = async (authUser, pagingQuery) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookCategories()");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter }, pagingQuery);

    // Check if book categorys are null or undefined
    if (!existingBookCategories || existingBookCategories.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found";
        error.error = "Book category not found or you do not have access to the data";
        throw error;
    }

    return existingBookCategories;
};

exports.getBookCategoryById = async (authUser, bookCategoryId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookCategoryById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: bookCategoryId });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category ID";
        error.error = `Book category not found by the provided ID (${bookCategoryId}) or you do not have access to the data`;
        throw error;
    }

    return existingBookCategories;
};

exports.getBookCategoriesByIds = async (authUser, bookCategoryIds, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 1 for all

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookCategories()");

    // Valid and invalid IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs");

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
        error.message = "Invalid book category ids";
        error.error = `All book category ids (${displayInvalidIds}) are invalid, no book category found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get existing data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: { $in: validIds } }, pagingQuery);

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookCategories.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category IDs";
        error.error = `Book category not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Get data
    return { bookCategories: existingBookCategories, presentIds, absentIds, invalidIds };
};


// ---------------------- Create methods ----------------------\\
exports.createBookCategory = async (authUser, newBookCategory) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookCategory()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(newBookCategory, bookCategoryModel.schema.paths, "book category", []);
    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookCategory, "book category");

    return await bookCategoryDL.createBookCategory(newBookCategory);
};

exports.createBulkBookCategory = async (authUser, newBookCategories) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkBookCategory()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookCategories, bookCategoryModel.schema.paths, "book category", []);
    // Data Access validation
    idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newBookCategories, "book category");

    // create new book categories in bulk
    return await bookCategoryDL.createBulkBookCategory(newBookCategories);
};


// ---------------------- Update methods ----------------------\\
exports.updateBookCategoryById = async (authUser, bookCategoryId, updatableBookCategory) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookCategoryById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");
    // Property validation
    idAndPropertyValidationUtil.checkWrongProperty(updatableBookCategory, bookCategoryModel.schema.paths, "book category", []);

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: bookCategoryId });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category ID";
        error.error = `Book category not found by the provided ID (${bookCategoryId}) or you do not have access to the data`;
        throw error;
    }

    // Update data
    return await bookCategoryDL.updateBookCategoryById(bookCategoryId, updatableBookCategory);
};

exports.updateBulkBookCategories = async (authUser, updatableBookCategories) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkBookCategories()");
    // Property validation
    idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableBookCategories, bookCategoryModel.schema.paths, "book category", []);

    // IDs validation and separation
    const bookCategoryIds = updatableBookCategories.map(user => user._id);
    const { validIds, invalidIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs");

    if (validIds.length === 0) {
        const displayInvalidIds = invalidIds.map(item => String(item));
        const error = new Error();
        error.status = 400;
        error.message = "Invalid book category ids";
        error.error = `All book category ids (${displayInvalidIds}) are invalid, no book category found by the provided IDs`;
        throw error;
    }


    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookCategories.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category IDs";
        error.error = `Book category not found by the provided IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Valid data
    const validUpdatableBookCategories = updatableBookCategories.filter(user => presentIds.includes(user._id));
    // Bulk operation generator
    const bulkUpdateOperations = await bookCategoryModel.generateBulkUpdateOperations(validUpdatableBookCategories);
    // Update data
    const updatedBookCategories = await bookCategoryDL.updateBulkBookCategories(bulkUpdateOperations);

    return { bookCategory: updatedBookCategories, presentIds, absentIds, invalidIds };
};


// ---------------------- Delete methods ----------------------\\
exports.deleteBookCategoryById = async (authUser, bookCategoryId) => {
    const thisOperationAccessibilityLevel = 2;

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookCategoryById()");
    // ID validation
    idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");

    // Filter generator
    const roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);

    // Get data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: bookCategoryId });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category ID";
        error.error = `Book category not found by the provided ID (${bookCategoryId}) or you do not have access to the data`;
        throw error;
    }

    // Delete data
    return await bookCategoryDL.deleteBookCategoryById(existingBookCategories[0]._id);
};

exports.deleteBulkBookCategories = async (authUser, bookCategoryIds) => {
    const thisOperationAccessibilityLevel = 1; // 1 for Admin only

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookCategories()");
   
    // Valid and invalid IDs separation
    const { validIds, invalidIds, duplicateIds } = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs");

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
        error.message = "Invalid book category IDs";
        error.error = `All book category ids (${displayInvalidIds}) are invalid, no book category found by the provided IDs`;
        throw error;
    }

    // Filter generator
    const roleFilter = await userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
    // Get existing data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories({ bookCategoryAccessLevel: roleFilter, _id: { $in: validIds } });

    const presentIds = [];
    const absentIds = [];

    validIds.forEach(id => {
        if (existingBookCategories.some(user => user._id.equals(id))) {
            presentIds.push(id);
        } else {
            absentIds.push(id);
        }
    });

    if (!existingBookCategories || existingBookCategories.length === 0) {
        const wrongIds = invalidIds.concat(absentIds);
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found with the provided book category IDs";
        error.error = `Book category not found with the provided book category IDs (${wrongIds}) or you do not have access to the data`;
        throw error;
    }

    // Bulk operation generator
    const bulkDeleteOperations = await bookCategoryModel.generateBulkDeleteOperations(existingBookCategories);

    // Delete data
    const deletedBookCategories = await bookCategoryDL.deleteBulkBookCategory(bulkDeleteOperations);

    return { bookCategory: deletedBookCategories, presentIds, absentIds, invalidIds };
};


// ---------------------- Search methods ----------------------\\
exports.searchBookCategory = async (authUser, searchTermsForBookCategory, pagingQuery) => {
    const thisOperationAccessibilityLevel = 10; // 10 for all

    // Access validation
    userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookCategory()");
    // ID and property validation
    idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookCategory, bookCategoryModel.schema.paths, "book category", []);

    // Filter generator
    const searchBookCategoryFilter = await bookCategoryModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookCategory);

    // Get existing data
    const { bookCategories: existingBookCategories, totalBookCategory } = await bookCategoryDL.getBookCategories(searchBookCategoryFilter, pagingQuery);

    // Check if book categorys are null or undefined
    if (!existingBookCategories || existingBookCategories.length === 0) {
        const error = new Error();
        error.status = 404;
        error.message = "Book category not found";
        error.error = "Book category not found with the provided search criteria or you do not have access to the data";
        throw error;
    }

    return existingBookCategories;
};


